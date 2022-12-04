// import request from '../utils/request';
import { basicInstance } from '@/utils/axios';

export function timeoutRequest() {
  return basicInstance.request({
    method: 'GET',
    url: '/timeout',
    global: true,
  });
}

interface IRes<T> {
  code: number,
  data: T,
  message: string,
}

export function successRequest() {
  return basicInstance.request<IRes<string>>({
    method: 'GET',
    url: '/success',
    interceptors: {
      requestInterceptors(conf) {
        console.log('接口请求拦截');
        return conf;
      },
      responseInterceptors(res) {
        console.log('接口响应拦截', res);
        return res;
      },
    },
  });
}

export function undefinedRequest() {
  return basicInstance.request({ method: 'GET', url: '/undefined' });
}
