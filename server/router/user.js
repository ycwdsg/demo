const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const user_handler = require('../router_handler/user')
// 注册
router.post('/registerUser',user_handler.registerUser)
// 登录
router.post('/login',user_handler.login)
// 退出登录
router.post('/logout',user_handler.logout)

module.exports = router