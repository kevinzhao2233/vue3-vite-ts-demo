import AxiosCls from './AxiosCls';

/**
 * 通用的 axios 实例
 * 建议为每一个后端服务或未使用相同请求相应格式的后端服务都创建不同的 axios 实例
 */
export const basicInstance = new AxiosCls({
  baseURL: 'https://www.fastmock.site/mock/855d70fd0fb848b6abd6c1a945e7834b/api-test',
  timeout: 1000 * 60 * 5,
  responseType: 'json',
  withCredentials: true, // 跨域请求允许携带 cookie
  interceptors: {
    // 请求拦截器
    // 设置 Token 一般在这里做
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result) => result,
  },
});
