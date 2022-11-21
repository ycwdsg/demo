// 路由:映射关系
// express的路由：客户端的请求与服务器的函数的映射关系
// express路由分为三部分：请求类型、请求的url地址、回调处理函数app.method(path,function)
const express = require('express')
const router = express.Router()//创建路由对象
router.get('/user/list',(req,res)=>{
    // 响应请求
    res.send('用户列表')
})

router.post('/user/add',(req,res)=>{
    res.send('新增用户')
})
exports = router//导出路由对象