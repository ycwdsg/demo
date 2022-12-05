import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
// 创建持久化pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;
