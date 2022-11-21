const express = require('express')
const app = express()

// 导入路由模块
const expressGet = require('./10.expressGet')
const expressPost = require('./11.expressPost')
// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))

// 必须在路由之前配置cors中间件，从而解决接口跨域问题
const cors = require('cors')
app.use(cors())

// 把路由模块注册到app上
app.use('/api',expressGet)
app.use('/api',expressPost)

app.listen('80',()=>{
    console.log("server running");
})