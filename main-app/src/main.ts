import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import microApp from '@micro-zoe/micro-app'

const app = createApp(App)

app.use(createPinia())
app.use(router)
microApp.start()
app.mount('#app')
