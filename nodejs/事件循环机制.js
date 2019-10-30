//事件机制由设计模式中观察者模式实现

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
/**
*  on：绑定监听器
*  emit：执行监听器
*  addListener，once，removeListener，removeAllListeners，setMaxListeners，listeners
**/
eventEmitter.on("init",init);
eventEmitter.on("login",login);
function init(name){
    eventEmitter.emit("login",name);
}
function login(name){
    console.log(name+",登录成功")
}
eventEmitter.emit("init",'彭飞');