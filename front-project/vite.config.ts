import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'//自动引入
import AutoComponent from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports:['vue','vue-router'],
      dts:'src/auto-import.d.ts'
    }),
    AutoComponent({
      resolvers:[AntDesignVueResolver()]
    })
  ],
  server:{//向外暴露网络
    host:'0.0.0.0',
    proxy:{
      '/api':{
        target:'http://192.168.8.51:8888',
        changeOrigin:true
      }
    }
  }
})
