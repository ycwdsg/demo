import { Modal } from 'ant-design-vue';
import { createVNode } from 'vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { router } from 'router/index';
import { setCookie, getCookie } from './setCookie';
import { logout as userOut } from '@/api/login';

export const setToken = (key: string, del?: boolean, date = new Date()) => {
  const expires = date.setTime(date.getTime() + 3 * 60 * 60 * 1000); // 设置过期时间
  const token: Map<string, string> = new Map([['token', key]]);
  del ? setCookie(token) : setCookie(token, expires);
};

export const getToken = () => {
  const token = getCookie('token')?.token;
  return token;
};

export const logout = () => {
  Modal.confirm({
    title: '确认要退出登录吗？',
    icon: createVNode(ExclamationCircleOutlined),
    onOk() {
      userOut().then(() => {
        setToken('', true);
        router.push('/');
      });
    }
  });
};
