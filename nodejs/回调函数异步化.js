var fs = require("fs");

var data = fs.readFileSync('callback.txt');

console.log(data.toString());
//被阻塞，需要等待结束
console.log("程序执行结束!");

console.log("");
fs.readFile('callback.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
//若使用回调，读取不会阻塞代码

console.log("程序执行结束!");