// 程序主入口
// 引入createApp函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
// 引入App组件(所有组件的父级组件)
import App from './App.vue'
import router from './router'
// 创建App应用返回对应的实例对象，并应用路由，使用mount方法挂载到id为app的div上
createApp(App).use(router).mount('#app')
