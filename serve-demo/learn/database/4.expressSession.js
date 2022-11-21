// 使用session认证
// 安装express-session中间件
const express = require('express')
const app = express()
const session = require('express-session')

app.use(session({
    secret:'suiyizifuchuan',//字符串任意
    resave:false,//固定属性与值
    saveUninitialized:true
}))
app.use(express.urlencoded({extended:false}))

app.post('/user/login',(req,res)=>{
    if(!req.body.username || !req.body.password){
        res.send({status:1,msg:'登录失败！'})
    }
    // 将用户的信息存储到session中
    req.session.user = req.body
    req.session.isLogin = true//将用户的登录状态存储到session中
    res.send({status:0,msg:'登录成功！'})
})

app.get('/user/username',(req,res)=>{
    if (!req.session.isLogin) {
        return res.send({status:1,msg:'fail'})
    }
    res.send({status:0,msg:'success',username:req.session.user.username})
})
// 清空session
app.post('/user/logout',(req,res)=>{
    req.session.destroy()//清空session的函数
    res.send({status:0,msg:'退出成功！'})
})
app.listen('8089',()=>{
    console.log('server running at 8089');
})