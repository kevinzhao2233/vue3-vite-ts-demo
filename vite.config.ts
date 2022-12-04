/**
 * Vite 中文文档 https://cn.vitejs.dev/
 */
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

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
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
      dts: './src/typings/auto-imports.d.ts',
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: './src/typings/components.d.ts',
    }),
  ],
};
