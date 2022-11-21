let http = require('http')
let fs = require('fs')
let url = require('url')
// web 服务器
http.createServer((request,response)=>{
    // 解析请求
    let pathname = url.parse(request.url).pathname

    console.log('请求在'+ pathname+'接受');

    fs.readFile(pathname.substr(1),(err,data)=>{
        if(err){
            console.log('err',err);
            response.writeHead(404,{'Content-Type':'text/html'})
            // 发送响应数据
            response.end()
        }else{
            response.writeHead(200,{'Content-Type':'text/html'})
            // 响应文件
            response.write(data.toString())
            // 发送响应数据
            response.end()
        }
    })
    
}).listen(8000)
// web客户端
var options = {
    host:'localhost',
    port:'8000',
    path:'/index.html'
}
var callback = function(res){
    // 更新数据
    var body = ''
    res.on('data',function(data){
        body+=data
    })
    res.on('end',function(){
        // 数据接收完成
        console.log(body);
    })
}
var req = http.request(options,callback)
req.end()