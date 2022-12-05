import { getCurrentInstance, ComponentInternalInstance } from 'vue';

// 获取全局自定义属性/方法
export default function useCurrentInstance() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  return appContext.config.globalProperties;
}
