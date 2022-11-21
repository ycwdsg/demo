// 操作mysql
// 导入mysql模块
const mysql = require('mysql')
// 建立mysql连接
const db = mysql.createPool({
    host:'127.0.0.1',//数据库的IP地址
    user:'root',//登录数据库的账号
    password:'admin123',//登录数据库的密码
    database:'my_db_01'//指定要操作哪个数据库
})
// 调用query函数,指定要执行的sql语句,通过回调函数拿到执行的结果
// db.query('SELECT 1',(err,results)=>{
//     if (err) {
//         return console.log(err.message)//打印报错
//     }
//     console.log(results)//执行成功:[ RowDataPacket { '1': 1 } ]
// })

db.query('SELECT * FROM users',(err,results)=>{
    if (err) return console.log(err.message)
    console.log(results);
})

// 插入数据,需要又占位符(?),否则可能会被sql注入
// const user = {username:'ycw',password:'cccccc'}
// db.query('insert into users (username,password) values (?,?)',[user.username,user.password],(err,results)=>{
//     // 可以用('INSERT INTO USERS SET ?',user)来执行sql插入语句，后续可以直接将数据对象作为占位符的值,而不是用数组的方式
//     if(err)return console.log(err.message)
//     console.log(results);//可以通过affectedRows===1判断插入数据是否成功
// })

// 更新数据：UPDATE 表名 SET 字段名 where 条件
// const users2 = {username:'yyy',password:'000'}
// db.query('update users set username=?,password=? where id=?',[users2.username,users2.password,6],(err,results)=>{
//     if(err)return console.log(err.message);
//     console.log(results);
// })

// 删除数据
// db.query('delete from users where id=?',5,(err,res)=>{//真删除，数据无法恢复
//     if(err)return console.log(err.message);
//     console.log(res);
// })

// 标记删除
db.query('update users set status=? where id=?',[1,6],(err,res)=>{
    if(err)return err.message
    console.log(res);
})
