const express = require('express')
const app = express()
const router = express.Router()

router.get('/user',(req,res)=>{
    // req.query获取客户端通过查询字符串发送到服务器的数据
    const query = req.query
    res.send({
        status:1,//0表示请求成功，1表示请求失败
        msg:'GET 请求成功',
        data:query//响应给客户端的数据
    })
})

module.exports=router