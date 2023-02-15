import type {
  InternalAxiosRequestConfig, AxiosResponse, AxiosRequestConfig,
} from 'axios';

export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
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

export interface RequestConfigInternal extends InternalAxiosRequestConfig {
  interceptors?: RequestInterceptors;
  global?: boolean;
}

interface PendingPoolVal {
  abortController: AbortController;
  global: boolean | undefined;
}

export type PendingPool = Map<string, PendingPoolVal>
