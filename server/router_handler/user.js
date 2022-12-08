// 拆分路由处理函数

// 导入数据库操作模块
const db = require('../db/index')
// 导入加密模块
const crypto = require('crypto')//user1345
const bcrypt = require('bcryptjs')
const fs = require('fs')
// 导入校验
const reg = require('../util/user')
// 导入jwt包
const jwt = require('jsonwebtoken')
// 导入配置文件的密钥
const config = require('../config')

function loadKey(file){
    return fs.readFileSync(file, 'utf8');
}

const prvKey = loadKey('./rsa-prv.pem')
const pubKey = loadKey('./rsa-pub.pem')

// 注册新用户的处理函数
exports.registerUser = (req,res)=>{
    // 获取客户端提交到服务器的用户信息
    const userInfo = req.body
    // 对表单数据进行合法性校验
    if(!userInfo.username||!userInfo.password){
        return res.cc('请输入用户名或密码！')
    }
    userInfo.password = crypto.privateDecrypt({key:prvKey, padding: crypto.constants.RSA_PKCS1_PADDING},new Buffer.from(userInfo.password,'base64')).toString('utf-8')
    // 对信息校验
    if (reg.user(userInfo.username,userInfo.password))return res.cc(reg.user(userInfo.username,userInfo.password))
    // 定义sql语句，查询用户名是否被占用
    const sqlStr = 'select * from users where username=?'
    db.query(sqlStr,userInfo.username,(err,result)=>{
        // 执行sql语句失败的处理
        if(err) return res.cc(err)
        if (result.length>0) return res.cc('用户名被占用，请更换其他用户名！')
        // 对用户名的密码进行加密
        userInfo.password = bcrypt.hashSync(userInfo.password,10)
        // 向数据库插入新用户
        const sql = 'insert into users set ?'
        db.query(sql,{username:userInfo.username,password:userInfo.password},(err,results)=>{
            if (err) return res.cc(err)
            // 判断影响行数
            if(results.affectedRows!==1) return res.cc('注册失败，请稍后重试或联系管理员！')
            // 注册成功
            res.cc('注册成功！',200)
        })
    })    
}

// 登录的处理函数
exports.login = (req,res)=>{
    let {username,password} = req.body
    if(!username||!password){
        return res.cc('请输入用户名或密码！')
    }
    password = crypto.privateDecrypt({key:prvKey, padding: crypto.constants.RSA_PKCS1_PADDING},new Buffer.from(password,'base64')).toString('utf-8')
    // 查询语句
    const sql = 'select * from users where username=?'
    db.query(sql,username,(err,result)=>{
        if(err)return res.cc(err)
        if(result.length!==1)return res.cc('没有此账户！')
        // 比对数据库与输入的密码是否一致
        const compare = bcrypt.compareSync(password,result[0].password)
        if(!compare)return res.cc('用户名或密码错误！')
        const user = {...result[0],password:'',avatar:''}//剔除密码和头像的信息
        const data = {...result[0],password:''}
        // 对用户的信息进行加密，生成token字符串
        const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn:config.expiresIn})
        res.send({status:200,token:'Bearer '+tokenStr,msg:'登录成功',data:data})
    })
}

exports.logout= (req,res) =>{
    const token = req.headers.authorization
    jwt.verify(token.slice(7),config.jwtSecretKey,(err)=>{
        if (err) {
            res.cc('token验证失败')
        }else{
            res.send({status:200,msg:'退出登录成功'})
        }
    })
}