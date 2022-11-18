import Request from './Request';

export const basicInstance = new Request({
  baseURL: 'https://www.fastmock.site/mock/855d70fd0fb848b6abd6c1a945e7834b/api-test',
  timeout: 1000 * 60 * 5,
  responseType: 'json',
  withCredentials: true, // 跨域请求允许携带 cookie
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      console.log('实例请求拦截器');

      return config;
    },
    // 响应拦截器
    responseInterceptors: (result) => {
      console.log('实例响应拦截器', result);
      return result;
    },
  },
});
