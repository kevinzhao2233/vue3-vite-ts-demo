import type { AxiosRequestConfig, AxiosResponse, Canceler } from 'axios';

export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截
  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
  global?: boolean;
}

interface PendingPoolVal {
  cancelFn: Canceler;
  global: boolean | undefined;
}

export type PendingPool = Map<string, PendingPoolVal>