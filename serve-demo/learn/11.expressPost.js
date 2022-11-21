const express = require('express')
const router = express.Router()
router.post('/user',(req,res)=>{
    const body = req.body
    res.send({
        status:1,
        msg:'POST 请求',
        data:body
    })
})
module.exports = router