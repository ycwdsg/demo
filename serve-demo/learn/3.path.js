const path = require('path')
// path：路径模块，node提供的，用来处理路径的模块
//path.join()将多个路径片段拼接成一个完整的路径字符串
//path.basename()用来从路径字符串中，将文件名解析出来

path.join('/a','/b','/c','../')//注意，../会抵消前一个路径，c不会拼接

path.basename('path','ext')
// path：必填，表示路径的字符串
// ext：选填，表示文件扩展名
// 返回值为路径中的最后一部分

const filePath = '/a/b/c/d/index.html'
const name = path.basename(filePath)
console.log(name)//index.html
const name2 = path.basename(filePath,'.html')
console.log(name2)//index

path.extname('path')//获取文件扩展名