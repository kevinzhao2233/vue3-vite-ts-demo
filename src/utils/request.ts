import axios from 'axios'
import { ElMessage } from 'element-plus'
import { store, key } from '../store'
import log from '../utils/log'

// 创建axios的实例
const service = axios.create({
  timeout: 10000, // 超时时间
  responseType: 'json'
})

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 让请求携带令牌，有些后端可能并不使用 Authorization 头部，则需要在这里改掉
    log.print('token、key', 'default', true, { token: store.getters.token, key })
    if (store.getters.token) {
      config.headers.Authorization = store.getters.token
    }
    return config
  },
  (error) => {
    ElMessage.error(error?.message || '请求格式错误')
    log.pretty('request error', error.url, 'danger', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 每个请求都打印出来，方便调试
    log.print('resInfo', 'success', true, response)

    // 判断自定义 code 值，需要跟后端协商，可能是其他值
    if (+res.code !== 200) {
      // 响应失败，还需根据各种 code 值进行页面跳转等操作
      ElMessage({
        message: res.message || 'Error: 响应错误',
        duration: 5000,
        type: 'error'
      })
      return Promise.reject(new Error(res.message || 'Error: 响应错误'))
    } else {
      // 获取响应成功，返回信息给组件
      const { data } = response
      const { code } = data
      // 自定义状态码为 200 表示 api 成功
      if (+code === 200) {
        return data
      } else {
        return res
      }
    }
  },
  (error) => {
    log.pretty('axios response error', error?.config?.url, 'danger', error?.toJSON() || error)
    ElMessage({
      message: error.message || 'Error',
      duration: 5000,
      type: 'error'
    })
    return Promise.reject(error)
  }
)

export default service
