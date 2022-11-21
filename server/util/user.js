// 校验规则
// 过滤html标签
const filterHtml=(val)=>{
    return /<.*?>/g.test(val.toString())
}
const regname=(name)=>{
    if(filterHtml(name)) return '用户名不合法！'
}
const regPsd=(psd)=>{
    psd = psd.toString()
    if(!/^.*(?=.*[a-z])(?=.*\d).{6,}.*$/.test(psd)) return "密码至少六位长度且应包含数字、字母、特殊字符!"
    return false
}
// 如果没有错误信息返回false
exports.user=(username,password)=>{
    let msg = ''
    regname(username)?msg+=regname(username):''
    regPsd(password)?msg+=regPsd(password):''
    if(msg.length>0) {
        return msg
    }else{
        return false
    }
}