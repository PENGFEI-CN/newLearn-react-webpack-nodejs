# webpack和react
# nodejs
## 模块化
### 介绍
* commonJS：module.export，同步加載文件；浏览器（CMD/AMD:RequireJS/SeaJS）：异步加载文件；
    * commonJS: 就近依赖，加载完某个依赖模块后并不执行只是下载，module.export引用，require使用，只是拷贝值
        ```
        //num.js
        let num = 0;
        module.exports={num};
        //index.js
        let num = require(./num.js).num;
        ```
    * AMD: 依赖前置加载完模块立即执行，执行顺序和书写顺序不一致，requireJS
        ```
       //define(标识id,依赖[],require函数)
       //module.js
        define(page,['jquery'],function(${
            let a = '111'; 
            let input = $('input').val;
            function outshow(){
                return a+input;
            }
            return {outshow};
        }})
        //main.js
        //baseUrl baseUrl参数指定本地模块位置的基准目录，即本地模块的路径是相对于哪个目录的。
        //paths paths参数指定各个模块的位置。这个位置可以是服务器上的相对位置，也可以是外部源。可以为每个模块定义多个位置，如果第一个位置加载失败，则加载第二个位置，后面我们将看到具体例子。
        //shim 有些库不是AMD兼容的，这时就需要指定shim属性的值。shim是用来帮助require.js加载非AMD规范的库。
            require.config({
                baseUrl:'./modules',
                paths:{
                    module:'module'
                }
            })
            require([module],function(module){
                console.log(module.outshow());
            })
        ```
    * CMD: 异步加载模块，seaJS
        ```
        define({foo:'123456'})
        define(function(require,exports,module){
            var module1 = require("./module1").foo;
            function CmdDefine(){
               console.log("CMD Demo"+module1);
            }
            CmdDefine.prototype.say=function(){
               console.log("CMD Demo!");
            }
            module.exports=CmdDefine;// 对外发布接口
        });
        ```
    * ES6模块是动态引用，不会缓存值，输出的是值的引用，也就是说模块内部变化会影响输出。export/export default 和 import使用

### 差异
1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
### 回调函数异步化，事件机制，EventEmitter
### node缓冲区Buffer
### Node.js Stream(流)，对文件进行操作，如复制较大文件，压缩文件等
### 模板化