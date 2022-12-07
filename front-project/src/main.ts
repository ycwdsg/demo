import { createApp } from 'vue';
import pinia from 'store/index';
import { router } from 'router/index';
import App from './App.vue';
import { getAssetsFile } from './utils/assets';
import 'ant-design-vue/dist/antd.variable.min.css';

const app = createApp(App);
app.use(pinia);
app.use(router);
// 挂载全局方法
app.config.globalProperties.getAssetsFile = getAssetsFile;
app.mount('#app');
