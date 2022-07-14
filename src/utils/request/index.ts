import axios, { AxiosRequestConfig, AxiosInstance, AxiosPromise } from 'axios';
import log from 'b-pretty-log';
import { useAppStore } from '@/stores/app';
import handleResponse from './handleResponse';
import handleError from './handleError';

export interface IAxiosConfig extends AxiosRequestConfig {
  global?: boolean
}

export interface IAxiosInstance extends AxiosInstance {
  (config: IAxiosConfig): AxiosPromise;
  clearPendingPool?: () => any[]
}

const showErrorMsg = (msg: string) => {
  // ElMessage({
  //   message: msg || 'Error: 网络请求出现错误',
  //   duration: 5000,
  //   type: 'error',
  // });
};

// 创建 axios 的实例
const request: IAxiosInstance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/855d70fd0fb848b6abd6c1a945e7834b/api-test',
  timeout: 5000, // 超时时间
  responseType: 'json',
  withCredentials: true, // 跨域请求允许携带 cookie
});

// 创建一个 api 请求的 pending 池，里面存放刚发出去但未收到响应的请求
const pendingPool = new Map();

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  (config: IAxiosConfig) => {
    const appSotre = useAppStore();
    // 让请求携带令牌，有些后端可能并不使用 Authorization 头部，则需要在这里改掉
    appSotre.token && config.headers && (config.headers.Authorization = appSotre.token);
    config.cancelToken = new axios.CancelToken((cancelFn) => {
      pendingPool.has(config.url)
        ? cancelFn(`${config.url} 请求重复，已被取消`)
        : pendingPool.set(`${config.method}::${config.url}`, { cancelFn, global: config.global });
    });
    return config;
  },
  (error) => {
    showErrorMsg(error?.message || '请求格式错误');
    log.pretty('request error', error.url, error, 'danger');
    return Promise.reject(error);
  },
);

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  (response): any => {
    // 删除 pending 池中已经拿到结果的请求
    pendingPool.delete(`${response.config.method}::${response.config.url}`);

    // 每个请求都打印出来，方便调试
    log(`resInfo -> ${response.config.method}::${response.config.url}`, response, 'success', true);

    return handleResponse(response.data);
  },
  (error) => {
    // 错误信息err传入isCancel方法，可以判断请求是否被取消
    if (!axios.isCancel(error)) pendingPool.delete(error.config.url);
    if (!error) return Promise.reject(error);
    // 有 response，且返回 http 状态码
    if (error.response) {
      error = handleError(error);
    } else {
      // 没有response(没有状态码)的情况
      // eg: 超时、断网、请求重复被取消、主动取消请求
      // 错误信息 err 传入 isCancel 方法，可以判断请求是否被取消
      if (axios.isCancel(error)) {
        throw new axios.Cancel(error.message || '请求被取消');
      } else if (error.stack && error.stack.includes('timeout')) {
        error.message = '请求超时!';
      } else {
        error.message = '连接服务器失败，请检查网络或服务器地址!';
      }
    }
    log.pretty('response error', error?.config?.url, error?.toJSON() || error, 'danger');
    showErrorMsg(error?.message || '网络错误');
    return Promise.reject(error);
  },
);

/**
 * 清除所有 pending 状态的请求
 * @param {Array} whiteList 白名单，里面的请求不会被取消，格式为 ['get::/api/foo', 'post::/api/bar']
 * 返回值 被取消了的api请求
 */
function clearPendingPool(whiteList: string[] = []) {
  if (!pendingPool.size) return [];

  // const pendingUrlList = [...pendingPool.keys()].filter((url) => !whiteList.includes(url))
  const pendingUrlList = Array.from(pendingPool.keys()).filter((url: string) => !whiteList.includes(url));
  if (!pendingUrlList.length) return [];

  pendingUrlList.forEach((pendingUrl: string) => {
    // 清除掉所有非全局的pending状态下的请求
    if (!pendingPool.get(pendingUrl).global) {
      pendingPool.get(pendingUrl).cancelFn();
      pendingPool.delete(pendingUrl);
    }
  });

  return pendingUrlList;
}
(request as IAxiosInstance).clearPendingPool = clearPendingPool;

export default request;
