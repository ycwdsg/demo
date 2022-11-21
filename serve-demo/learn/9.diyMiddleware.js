// 自定义中间件
const express = require('express')
const app = express()
// node内置的querystring模块解析请求体数据
const qs = require('querystring')
app.use((req,res,next)=>{
    // 解析请求的中间件
    // 当数据量较大时，客户端会把数据切割后分批发送到服务器，因此需要手动对接收的数据进行拼接
    let str = ''
    req.on('data',function(value){//客户端发送数据请求时，会触发req的data事件（数据量大时可触发多次）
        str+=value
    })
    // 当请求体数据接收完毕后，会自动触发req的end事件
    req.on('end',function(value){
        // 这时str中存放的是完整的请求体数据
        console.log(str);
        const body = qs.parse(str)
        console.log(body);
        req.body = body
        next()
    })
})

app.post('/user',(req,res)=>{
    res.send(req.body)//使用上有挂载的中间件
})

app.listen(8090,function(){
    console.log('server running');
})