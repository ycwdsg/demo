// 请求响应和拦截
import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';
import { userStore } from 'store/user';
import { router } from 'router/index';
import { getCookie } from './setCookie';

const service = axios.create({
  timeout: 30000
});
message.config({
  top: '50px'
});
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8;';

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const user = userStore();
    config.headers!.Authorization = user.getToken || getCookie('token')?.token; // ！非空断言
    return config;
  },
  async (err) => {
    return await Promise.reject(err);
  }
);

service.interceptors.response.use(
  async (res) => {
    // todo:axios泛型解决any类型问题
    const msg = res.data.message || res.data.msg;
    const { status } = res.data;
    if (status === 200) {
      message.success(msg as string);
      return await Promise.resolve(res.data);
    }
    if (res.data.status === 500) {
      message.error(msg as string);
      return await Promise.resolve(res.data);
    }
    if ((res.data.status as number) === 403) {
      message.error('身份认证过期，请重新登录！');
      router.push('/');
      return await Promise.resolve('身份认证过期，请重新登录！');
    }
    message.error(msg as string);
    return await Promise.resolve('未知错误');
  },
  async (err) => {
    message.error(err as string);
    return await Promise.reject(err);
  }
);

export default service;
