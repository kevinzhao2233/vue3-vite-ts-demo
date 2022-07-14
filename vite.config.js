/**
 * Vite 中文文档 https://cn.vitejs.dev/
 */
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

import vue from '@vitejs/plugin-vue';
import path from 'node:path';

export default {
  server: {
    // 开发服务端口
    port: 10000,
    // 是否开启 https, 但是开启了也没有证书，只在有些功能必须要 https 协议时使用即可
    https: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@comps': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/views'),
    },
  },

  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
};
