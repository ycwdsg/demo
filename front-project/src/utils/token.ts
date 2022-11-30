import { userStore } from 'store/user';
import { setCookie, getCookie } from './setCookie';

export const setToken = (key: string) => {
  const date = new Date();
  const expires = date.setTime(date.getTime() + 3 * 60 * 60 * 1000); // 设置过期时间
  const token: Map<string, string> = new Map([['token', key]]);
  setCookie(token, expires);
  const user = userStore();
  user.saveToken(key);
};

export const getToken = () => {
  const token = getCookie('token')?.token;
  return token;
};
