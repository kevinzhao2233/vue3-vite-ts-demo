/**
 * Vite 中文文档 https://cn.vitejs.dev/
 */
import vue from '@vitejs/plugin-vue';
import path from 'path';

module.exports = {
  server: {
    // 开发服务端口
    port: 8111,
    // 是否开启 https, 但是开启了也没有证书，只在有些功能必须要 https 协议时使用即可
    https: false
  },
  resolve: {
    // 别名映射，2.0 版本不再需要以 / 结尾了
    alias: {
      '/@': path.resolve(__dirname, './src'),
      '/@comps': path.resolve(__dirname, './src/components'),
      '/@assets': path.resolve(__dirname, './src/assets'),
      '/@pages': path.resolve(__dirname, './src/views')
    }
  },
  // vite2.x 不止是 vue 可以用，适配框架以插件的形式引入
  plugins: [
    vue()
  ]
};
