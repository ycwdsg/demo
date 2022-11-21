// 中间件分类：
// 1.应用级别中间件：全局中间件，使用app.use注册的中间件
// 2.路由级别中间件：局部中间件，在路由中使用的中间件
// 3.错误级别中间件：定义时有四个参数：(err,req,res,next)
// 4.内置中间件：express.static、express.json、express.urlencoded
// 5.第三方中间件：非express官方内置的中间件
const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    throw new Error('服务器错误！')//抛出一个自定义异常
    res.send('error')
})
app.use((err,req,res,next)=>{//错误级别中间件
    // 只要发生了错误，就立即执行出错误中间件，捕获整个项目的异常错误，防止程序崩溃
    // 注意：错误级别的中间件必须注册在所有路由之后！
    console.log('发生了错误'+err.message);
    res.send('error'+err.message)
})
app.listen(80,()=>{
    console.log('server running success!');
})