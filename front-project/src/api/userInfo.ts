import request from 'utils/request';

export const userInfo = async () => {
  return await request({
    method: 'get',
    url: '/project/test'
  });
};
