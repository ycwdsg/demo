// middleware：中间件，特指业务流程的中间处理环节，主要作用是对请求进行预处理
var express = require('express')
var app = express()
// 中间件格式：app.get('/',function(res,req,next){next()}) 包含请求方式、请求地址、请求的回调处理函数（中间件处理函数）
// 中间件处理函数中必须包含next处理函数，路由处理函数没有next处理函数
// next函数的作用：实现多个中间件连续调用的关键，表示把流转关系转交给下一个中间件或路由

const mw2 = function(req,res,next){
    console.log('中间件函数2');
    next()
}
// 中间件函数定义
const mw = function(req,res,next){
    console.log('中间件函数1');
    const time = Date.now()
    // 多个中间件共享一份req和res，可以在上游添加自定义属性和方法，供下游中间件或路由使用
    req.requestTime = time
    next()
}

const localmw = function(req,res,next){
    console.log('局部中间件1');
    next()
}

// 注册全局生效中间件
// 当有多个中间件时，会按照中间件注册的先后顺序依次进行调用
app.use(mw)
app.use(mw2)

// 局部中间件：不使用app.use注册的中间件
app.get('/',localmw,(req,res)=>{// localmw这个局部中间件只在这个路由中生效，中间件生效后再执行后面的回调处理函数
    // 定义多个中间件 : app.get('/',mw1,mw2,()=>{})或者app.get('/',[mw1,mw2],()=>{})
    res.send('执行了app.get,'+req.requestTime)
})

app.post('/',(req,res)=>{
    res.send('执行了app.post')
})

app.listen('80',()=>{
    console.log('server running at localhost');
})

// 中间件使用的注意事项：
// 1.必须在路由之前注册中间件
// 2.客户端发来请求，可以调用多个中间件进行处理
// 3.中间件函数别忘了next()
// 4.为防止逻辑混乱，next后不写代码
// 5.连续调用多个中间件时，多个中间件之间，共享req和res对象