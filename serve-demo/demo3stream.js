var fs = require('fs')
var data = ''

var  readStream = fs.createReadStream('demo1http.js')

var writeStream = fs.createWriteStream('output.txt')
// 设置编码为utf-8
readStream.setEncoding('utf-8')

readStream.on('data',(chunk)=>{
    data=chunk
})
// 将读取到的内容写入指定文件中
readStream.pipe(writeStream)

readStream.on('end',()=>{
    console.log(data);
})

readStream.on('error',(err)=>{
    console.log(err.stack);
})

console.log("程序执行完毕");