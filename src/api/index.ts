import request from '../utils/request'

export function timeoutRequest() {
  return request({ method: 'GET', url: '/timeout', global: false })
}

export function successRequest() {
  return request({ method: 'GET', url: '/success' })
}

export function undefinedRequest() {
  return request({ method: 'GET', url: '/undefined' })
}
