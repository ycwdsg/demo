const express = require('express')
const router = express.Router()
// 用户信息获取模块
// 导入处理器函数
const userInfo_handler = require('../router_handler/userInfo')
router.get('/test',userInfo_handler.test)
module.exports = router