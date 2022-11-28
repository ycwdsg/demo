import request from '../utils/request'

export const userInfo=() =>{
   return request({
    method:'get',
    url:'/project/test'
   })
}