let util = require('util')

function fn(){
    return Promise.reject(null)//promise拒绝的原因且可被转换成false，则值会被封装在error对象中
}

const callbackFunction = util.callbackify(fn)

callbackFunction((err,rst)=>{
    console.log( err && err.hasOwnProperty('reason') && err.reason === null)//true
})