import request from '../utils/request'

// 只为做演示，真实项目需要在 /utils/request.ts 中封装 get 请求，并统一配置 URL
export async function getMusic(params: { keywords: string }) {
  return await request({ method: 'GET', url: 'https://slbb.top/api/search', params: params })
}
