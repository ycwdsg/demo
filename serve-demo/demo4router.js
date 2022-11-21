let http = require('http')
let url = require('url')

function start(route){
    function onRequest(request,response){
        let pathname = url.parse(request.url).pathname
        route(pathname)
        response.writeHead(200,{'Content-Type':'text/plain'})
        response.write('hello router')
        response.end()
    }
    http.createServer(onRequest).listen(8888)
    console.log('serve has started')
}

function route(pathname){
    console.log('route request for' + pathname)
}
console.trace('route')
// 描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口
console.log(process.platform);
console.log(process.execPath);
console.log('当前版本'+process.version);


start(route)
