let http = require('http')
let url = require('url')
let util = require('util')
let querystring = require('querystring')
const QueryString = require('qs')

// 获取get请求的内容
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'})
    // res.end(util.inspect(url.parse(req.url,true)))
    let userInfo = url.parse(req.url,true).query
    res.write('用户名:'+userInfo.username)
    res.write('\n')
    res.write('年龄:'+userInfo.age)
    res.end()
}).listen(8888)

// 获取post请求
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
http.createServer((req,res)=>{
    let post =''
    req.on('data',(chunk)=>{
        post+=chunk
    })
    req.on('end',()=>{
        post = QueryString.parse(post)
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        if(post.name&&post.url){
            // res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
            res.write('名字:'+post.name)
            res.write('<br>')
            res.write('地址:'+post.url)
        }else{
            res.write(postHTML)
        }
        res.end()
    })
}).listen(8889)