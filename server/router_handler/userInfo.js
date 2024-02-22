// 导入数据库操作模块
const db = require('../db/index')
exports.getUserInfo = (req,res) =>{
    const sql = 'select id,username,nickname,tel,avatar from users where id=?'
    db.query(sql,req.auth.id,(err,result)=>{
        // 执行sql失败
        if(err) return req.cc(err)
        // 查询为空
        if(result.length !== 1) return req.cc('获取用户信息失败！')
        res.send({
            status:200,
            msg: '查询成功！',
            data: result[0]
        })
    })
}