// express 提供的托管静态资源：express.static
// 可以将指定目录下的图片、css文件、js文件对外开放访问
const express = require('express')
const app = express()
app.use(express.static('./public'))//多个静态资源时需多次调用
// 如果需要加路径，可以加路径参数
app.use('/abc',express.static('./public'))//这个需要输入路径：/abc/a.js
app.listen('8081',()=>{
    console.log('server running')
})