// 请求响应和拦截
import axios from 'axios'
const service = axios.create({
    timeout: 30000
})

service.interceptors.request.use((config)=>{
    
    return config
},(err)=>{
    console.log('Request Error' + err)
    return Promise.reject(err)
})

export default service