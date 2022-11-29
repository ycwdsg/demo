// 请求响应和拦截
import axios from 'axios'
import { message } from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'; 
import { userStore } from 'store/user';
import { getCookie } from './setCookie';
import {router} from 'router/index'
const service = axios.create({
    timeout: 30000
})
message.config({
    top:'50px'
})
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8;'

service.interceptors.request.use((config)=>{
    const user = userStore()
    config.headers!['Authorization'] = user.getToken||getCookie('token')?.token//！非空断言
    return config
},(err)=>{
    console.log('Request Error' + err)
    return Promise.reject(err)
})

service.interceptors.response.use((res)=>{
    const msg = res.data.message || res.data.msg
    const status = res.data.status
    if (status===200) {
        message.success(msg)
        return Promise.resolve(res.data)
    }else if(res.data.status===500){
        message.error(msg)
        return Promise.resolve(res.data)
    }else if(res.data.status===403){
        message.error('身份认证过期，请重新登录！')        
        router.push('/')
        return Promise.resolve('身份认证过期，请重新登录！')
    }else{
        message.error(msg)
        return Promise.resolve('未知错误')
    }
},(err)=>{
    console.log('Response Error'+err);
    message.error(err)
    return Promise.reject(err)
})

export default service