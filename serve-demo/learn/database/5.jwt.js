// session需要配合cookie才能实现，由于cookie不支持跨域，所以，当涉及前端跨域请求后端接口时，需要额外做配置，才能实现跨域认证
// jwt：跨域认证解决方案
// jwt的使用方式：一般写在http的请求头的authorization字段中Autorization: Bearer <token>
// 在express中使用jwt：安装jsonwebtoken和express-jwt两个包
// jsonwebtoken:生成jwt字符串
// express-jwt：将jwt字符串解析还原成json对象
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const secretKey = 'asdjlfjlkasdjgladjklg'//定义secret密钥，值随意
const express = require('express')
const app = express()
app.use(express.urlencoded({extended:false}))
// expressJwt():解析token中间件
// .unless:指定哪些接口不需要访问权限
// 只要配置成功了express-jwt中间件，就可以把解析出来的用户信息挂载到req.auth上
app.use(expressJwt.expressjwt({secret:secretKey,algorithms:['HS256']}).unless({path:[/^\/api\//]}))
app.post('/api/login',(req,res)=>{
    if(!req.body.username || !req.body.password){
        res.send({status:400,msg:'登录失败！'})
    }
    res.send({
        status:200,
        msg:'登录成功！',
        token:jwt.sign({username:req.body.username},secretKey,{expiresIn:'100s'})
        //三个参数：用户的信息对象、加密的密钥、配置对象，可以配置token的有效期
    })
})
app.get('/admin/getInfo',(req,res)=>{
    res.send({
        status:200,
        msg:'获取用户信息成功！',
        data:req.auth
    })
})
// 使用错误中间件，捕获jwt失败后产生的错误，防止程序异常崩溃
app.use((err,req,res,next)=>{   
    if (err.name==='UnauthorizedError') {//由token解析失败导致的
        return res.send({
            status:401,
            msg:'token错误'
        })
    }
    res.send({
        status:500,
        msg:'未知错误'
    })
})
app.listen('8888',()=>{
    console.log('server running at 8888');
})