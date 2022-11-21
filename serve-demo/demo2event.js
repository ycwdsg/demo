var events = require('events')

// 创建eventEmitter对象
var eventEmitter =new events.EventEmitter()

// eventEmitter对象注册了some_event监听器
eventEmitter.on('some_event',()=>{
    console.log('some_event 事件触发');
})

setTimeout(() => {
    // 向对象发送some_event事件，触发了监听器
    eventEmitter.emit('some_event')
}, 1000);

// addListener(event, listener)为指定事件添加一个监听器
// on(event, listener) 为指定事件注册一个监听器，接受一个字符串和回调函数