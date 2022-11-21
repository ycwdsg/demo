const http = require('http')
// http模块 创建服务器
const server = http.createServer()//创建服务器对象

// 通过.on绑定request事件
server.on('request',(req,res)=>{//事件触发执行的回调
    console.log('request事件触发');
    //req是请求对象，包含了与客户端相关的数据和属性，有url、method等属性，
    console.log('地址是'+req.url+'请求方法：'+req.method);
    // res:响应对象，包含了与服务器相关的属性和数据
    // res.end('hello node')//向客户端发送指定的内容，并结束这次请求的处理过程
    // 中文乱码问题：添加响应头
    res.setHeader('Content-Type','text/html;charset=utf-8')

    // res.end('你好，node')
    const url = req.url
    let content = '<p>404 not found!</p>'
    if(url=='/'||url=="/index.html"){
        content = '<h1>首页</h1>'
    }else if(url=='/about.html'){
        content = '<h1>关于</h1>'
    }
    res.end(content)
})
// 调用.listen方法，启动web服务器实例,第一个参数为端口号
server.listen(80,()=>{//服务器启动的回调
    console.log('服务器启动了');
})
