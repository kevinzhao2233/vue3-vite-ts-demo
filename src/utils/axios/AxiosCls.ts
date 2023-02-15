/**
 * 定制化能力更高的 Axios 封装，具有以下特性
 * ✨ 比较好的 TS 加持
 * ✨ 有的项目不只是只有一个后端服务，所以对应请求和响应的处理是不一样的，
 * 可以通过 new AxiosCls() 产生多个实例，每个实例都能配置不同的 baseURL、timeout 等等。
 * ✨ 具有全局、实例、接口拦截器，满足各种特殊接口的需求（比如字节流传输等等）
 * 拦截顺序为 接口请求拦截 | 实例请求拦截器 | 全局请求拦截器 | 全局响应拦截器 | 实例响应拦截器 | 接口响应拦截
 */

import axios from 'axios';
import log from 'b-pretty-log';
import qs from 'qs';
import type { AxiosInstance, AxiosResponse } from 'axios';
import type {
  PendingPool, RequestConfig, RequestConfigInternal, RequestInterceptors,
} from './types';

export default class AxiosCls {
  // axios 实例
  instance: AxiosInstance;

  // 拦截器对象
  interceptorsObj?: RequestInterceptors;

  // 请求 pending 池，存放发出但未收到响应的请求
  pendingPool: PendingPool;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;
    this.pendingPool = new Map();

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (conf) => conf,
      (error: any) => {
        log.pretty('request error', `${error.method}::${error.url}`, error, 'danger');
        return error;
      },
    );

    // 实例的请求拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch,
    );

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      // 因为接口的数据都在 res.data 下，所以直接返回 res.data
      (res: AxiosResponse) => {
        // 每个请求都打印出来，方便调试
        log(`resInfo -> ${res.config.method}::${res.config.url}`, res, 'success', true);

        return res.data;
      },
      (error: any) => {
        if (!error) return error;
        if (!error.response) {
          // 没有 response(没有状态码)的情况
          // eg: 超时、断网、请求重复被取消、主动取消请求
          // 错误信息 err 传入 isCancel 方法，可以判断请求是否被取消
          if (axios.isCancel(error)) {
            return error;
          } if (error.stack && error.stack.includes('timeout')) {
            error.message = '请求超时!';
          } else {
            error.message = '连接服务器失败，请检查网络或服务器地址!';
          }
        }
        log.pretty('response error', `${error?.config?.method}::${error?.config?.url}`, error?.toJSON ? error.toJSON() : error, 'danger');
        return error;
      },
    );

    // 实例的响应拦截器
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch,
    );
  }

  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果我们为单个请求设置了拦截器，会在这里执行
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config as RequestConfigInternal);
      }

      const key = `${config.method}::${config.url}::${qs.stringify(config.params)}`;

      const abortController = new AbortController();
      config.signal = abortController.signal;

      if (this.pendingPool.has(key)) {
        this.pendingPool.get(key)?.abortController.abort();
        reject(`请求重复，已取消上次的请求\n${key}`);
      }
      this.pendingPool.set(key, { abortController, global: config.global });

      this.instance.request<any, T>(config)
        .then((res) => {
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors<T>(res);
          }
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        })
        .finally(() => {
          // const key = `${config.method}::${config.url}`;
          key && this.pendingPool.delete(key);
        });
    });
  }

  clearPendingPool(whiteList?: string[]): string[] {
    if (!this.pendingPool.size) return [];

    const pendingUrlList = Array.from(this.pendingPool.keys()).filter((url: string) => !whiteList?.includes(url));

    pendingUrlList.forEach((pendingUrl: string) => {
      // 清除掉所有非全局的 pending 状态下的请求
      if (!this.pendingPool.get(pendingUrl)?.global) {
        this.pendingPool.get(pendingUrl)?.abortController.abort();
        this.pendingPool.delete(pendingUrl);
        console.warn(pendingUrl, '请求已被取消，原因：调用 clearPendingPool');
      }
    });

    return pendingUrlList;
  }
}
