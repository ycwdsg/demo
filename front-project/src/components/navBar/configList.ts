import { changeTheme } from '@/utils/userConfig';
import { logout } from '@/utils/token';

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
  },
  {
    id: 4,
    label: '退出登录',
    link: '',
    method: logout
  }
];
export interface config {
  id: number;
  label: string;
  link: string;
  method?: VoidFunction;
}
