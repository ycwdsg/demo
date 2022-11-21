// 创建基本的服务器
const express = require('express')
// 引入cors中间件
const cors = require('cors')

const app = express()
// 配置跨域中间件
app.use(cors())
// 配置解析表单数据中间件
app.use(express.urlencoded({extended:false}))

// 封装请求返回信息的全局中间件
app.use((req,res,next)=>{
    // 设置默认值为500，表示失败
    res.cc = (err,status=500)=>{
        res.send({
            status,
            message:err instanceof Error ? err.message : err
        })
    }
    next()
})

// 在路由之前配置解析token的中间件
const {expressjwt} = require('express-jwt')
const config = require('./config')
app.use(expressjwt({secret:config.jwtSecretKey,algorithms:['HS256']}).unless({path:[/^\/api/]}))//排除api开头的接口

// 导入路由模块
const routers = require('./router/index')
app.use('/api',routers.user)

// 错误级别中间件
app.use((err,req,res,next)=>{
    if(err.name==='UnauthorizedError') return res.cc('身份认证失败！')
    res.cc(err)
})

app.listen('8888',()=>{
    console.log('server running at 8888');
})