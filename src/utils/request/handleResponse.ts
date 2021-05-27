import log from 'b-pretty-log'

// ** 这里的响应数据结构依照 fastmock 平台的响应结构

// 处理响应错误码
export default (response: any) => {
  // 每个请求都打印出来，方便调试
  log(`resInfo -> ${response.config.url}`, response, 'success', true)

  // 从 axios 封装的 response 中分离出服务器返回的 response
  const res = response.data
  const code = +res.code
  let message = (res || {}).desc
  // 如果 http 响应状态码 res.code 正常，则直接返回数据
  if (code === 0) {
    return { code, data: res.data, message }
  } else {
    // code 不正常的话，根据与后端约定好的 code，做出对应的提示与处理
    // 返回一个带有 code 和 message 属性的对象

    switch (code) {
      // 如果后端对 code 有固定的解释，但没有固定描述信息，可以在这里赋值
      case 2:
        message = message || '请求地址错误'
        break
      // ...
    }
    return { code, data: res.data, message }
  }
}