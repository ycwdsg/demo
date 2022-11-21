// console.log('hello node');
var http = require('http')
http.createServer((request,response)=>{
    // 发送http头部，状态：200.类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    // 发送响应的数据
    response.end('hello node')
}).listen(8888)
console.log('serve running')