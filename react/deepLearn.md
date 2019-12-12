# react深入学习
* 为什么使用mobx
    mobx面向对象，redux函数式编程
* react高阶组件封装懒加载图片
* react中setState的同异步问题，参数和回调的使用，
```
this.setState((preState) => {
    //preState更新前的数据
},()=>{
    //数据更新之后
    console.log(this.state)
})
```
* 纯组件，数据突变时的更新渲染，浅拷贝与深拷贝
* Hooks
* immutable数据不可变性