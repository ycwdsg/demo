import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'; // 自动引入
import AutoComponent from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts',
      // 生成eslint动态导入模块配置文件，需要更新配置文件时设为true，并重启项目更新文件
      eslintrc: {
        enabled: false
      }
    }),
    AutoComponent({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  server: {
    // 向外暴露网络
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://192.168.8.51:8888',
        // target: 'http://192.168.222.86:8888',
        changeOrigin: true
      },
      '/project': {
        target: 'http://192.168.222.86:8888',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: 'api',
        replacement: resolve(__dirname, 'src/api')
      },
      {
        find: 'store',
        replacement: resolve(__dirname, 'src/store')
      },
      {
        find: 'utils',
        replacement: resolve(__dirname, 'src/utils')
      },
      {
        find: 'coms',
        replacement: resolve(__dirname, 'src/components')
      },
      {
        find: 'router',
        replacement: resolve(__dirname, 'src/router')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/style.scss";'
      }
    }
  }
});
