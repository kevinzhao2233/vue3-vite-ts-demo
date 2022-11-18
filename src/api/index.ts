// import request from '../utils/request';
import { basicInstance } from '@/utils/axios';

export function timeoutRequest() {
  return basicInstance.request({
    method: 'GET',
    url: '/timeout',
    global: true,
  });
}

interface IRes {
  code: number,
  data: string,
  message: string,
}

export function successRequest() {
  return basicInstance.request<IRes>({
    method: 'GET',
    url: '/success',
    interceptors: {
      requestInterceptors(conf) {
        console.log('接口请求拦截');
        return conf;
      },
      responseInterceptors(res) {
        console.log('接口响应拦截');
        return res;
      },
    },
  });
}

export function undefinedRequest() {
  return basicInstance.request({ method: 'GET', url: '/undefined' });
}
