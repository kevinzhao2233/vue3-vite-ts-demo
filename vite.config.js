import vue from '@vitejs/plugin-vue'
import path from 'path'

module.exports = {
  server: {
    // 开发服务端口
    port: 8111,
    // 是否开启 https, 开启了也没证书？？
    https: false
  },
  resolve: {
    // 别名，别名映射，2.0 版本不再需要以 / 结尾了
    alias: {
      '/@': path.resolve(__dirname, './src'),
      '/@comps': path.resolve(__dirname, './src/components')
    }
  },
  // vite 现在不止是 vue 可以用，适配框架以插件的形式引入
  plugins: [vue()]
}
