const express = require('express')
const router = require('./router')
// 创建web服务器
const app = express()

// 启动服务器
app.listen(8088,()=>{
    console.log('express server running');
})

// 监听get/post请求
app.get('/user',(req,res)=>{
    // 调用send向客户端响应
    // res.send({name:'小明',age:'18',height:'180'})
    // req.query 默认是一个空对象
    // 客户端可以通过拼接字符串的形式发送到服务器，如：?name=zs&age=20
    // 服务器可以通过req.query对象访问,如req.query.name
    res.send(req.query)
    // 获取url中的动态参数：req.params
})
app.get('/userInfo/:id',(req,res)=>{//动态参数可以有多个/:id/:userId
    res.send(req.params)//{"id":id值}
})
app.post('/user',(req,res)=>{
    res.send(req.path)// '/user'
})
// 注册路由模块
app.use(router)
// app.use('api',router)可以在注册中间件的时候加入路径、相应的路由访问也需添加对应的路径
// app.use，可以注册全局中间件