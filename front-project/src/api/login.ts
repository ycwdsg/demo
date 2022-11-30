import request from 'utils/request';
import type { user } from 'store/interface';

export const registerAccount = async (
  data: Pick<user, 'username' | 'password'>
) => {
  return await request({
    url: '/api/registerUser',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
};

export const login = async (data: Pick<user, 'username' | 'password'>) => {
  return await request({
    url: '/api/login',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
};
