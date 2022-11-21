const fs = require('fs')
// fs:文件系统模块，主要是readFile和writeFile
fs.readfile(path,options,function(err,data){})
// path:必填参数，表示文件路径
// options:选填，表示以什么编码格式来读取文件
// callback:必填，表示文件读取完后的回调函数,函数有err和data两个形参，分别表示失败和成功的结果

fs.writeFile(path,data,options,function(err,data){})
// data:必填，表示写入的内容，其他参数同readfile

// 关于path的问题：
// node提供了__dirname来表示当前文件所处的目录,可以通过dirname来拼接路径
console.log(__dirname)