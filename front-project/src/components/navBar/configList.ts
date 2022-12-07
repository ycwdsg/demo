import { ConfigProvider } from 'ant-design-vue';

// TODO：创建修改主题和设置具体样式的函数
const changeTheme = () => {
  document.documentElement.setAttribute('data-theme', 'dark');
  ConfigProvider.config({
    theme: {
      primaryColor: '#ccc'
    }
  });
};
export const configList = [
  {
    id: 0,
    label: '个人中心',
    link: '/useCenter'
  },
  {
    id: 1,
    label: '主题切换',
    link: '',
    method: changeTheme
  },
  {
    id: 2,
    label: '全局配置',
    link: '/globalConfig'
  },
  {
    id: 3,
    label: '个性化设置',
    link: '/moreConfig'
  }
];
export interface config {
  id: number;
  label: string;
  link: string;
  method?: VoidFunction;
}
