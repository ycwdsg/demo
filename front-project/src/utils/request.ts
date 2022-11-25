// 请求响应和拦截
import axios from 'axios'
import { message } from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'; 
const service = axios.create({
    timeout: 30000
})
message.config({
    top:'50px'
})
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8;'

service.interceptors.request.use((config)=>{
    
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
    }else{
        return Promise.reject('未知错误')
    }
},(err)=>{
    console.log('Response Error'+err);
    message.error(err)
    return Promise.reject(err)
})

export default service