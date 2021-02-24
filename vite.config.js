import path from 'path';

module.exports = {
  // 开发服务端口
  port: 8111,
  // 是否开启 https, 开启了也没证书？？
  https: false,
  // 别名，别名映射必须以 / 开头和结尾
  [resolve.alias]: {
    '/@/': path.resolve(__dirname, './src'),
    '/@comps/': path.resolve(__dirname, './src/components'),
  },
};