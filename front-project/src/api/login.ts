import request from '../utils/request'
import type { user } from '../store/interface'

export const registerAccount=(data:user)=>{
    return request({
        url:'/api/registerUser',
        method:'post',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data
    })
}

export const login=(data:user)=>{
    return request({
        url:'/api/login',
        method:'post',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data
    })
}