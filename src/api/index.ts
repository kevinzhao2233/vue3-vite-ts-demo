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
    // 接口拦截器举例，请求拦截器在最开始执行，响应拦截器在最末尾执行
    interceptors: {
      requestInterceptors(conf) {
        return conf;
      },
      responseInterceptors(res) {
        return res;
      },
    },
  });
}

export function undefinedRequest() {
  return basicInstance.request({ method: 'GET', url: '/undefined' });
}
