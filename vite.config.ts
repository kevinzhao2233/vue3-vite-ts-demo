/**
 * Vite 中文文档 https://cn.vitejs.dev/
 */
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver, AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

import vueJsx from '@vitejs/plugin-vue-jsx';
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
    },
  },

  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        'vue',
      ],
      dts: './src/typings/auto-imports.d.ts',
    }),
    Components({
      resolvers: [NaiveUiResolver(), AntDesignVueResolver()],
      dts: './src/typings/components.d.ts',
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // includePaths: ["node_modules/"],
      },
    },
  },
  build: {
    terserOptions: {
      // 生产环境下移除 debugger console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
};
