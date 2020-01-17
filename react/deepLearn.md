# react深入学习

## 为什么使用mobx

    mobx面向对象，redux函数式编程

## react高阶组件封装懒加载图片（react-lazyload的使用）

## react中setState的同异步问题，参数和回调的使用

    ```
    this.setState((preState) => {
        //preState更新前的数据
    },()=>{
        //数据更新之后
        console.log(this.state)
    })
    ```

## 纯组件，数据突变时的更新渲染，浅拷贝与深拷贝

## Hooks

    * useState
    * useEffect
    * useContent
    * useCallback
    * useMemo

## immutable数据不可变性

## diff算法以及key的合理使用(vue的diff算法有何不同)

    diff算法策略：层次遍历，只对同层级节点进行比较，节点不存在或者则该节点
    * element diff
    + 插入、移动、删除
    * tree diff
    * component diff

## react中receiveProps的作用，shouldComponentUpdate的具体作用

    * shouldComponentUpdate
      * 无改变的setState和由父组件重新渲染导致的所有子组件重新渲染的问题
    * 纯组件
      * shadowComparis浅比较

## fiber（reconciliation（diff算法自顶向下不可中断））：拆分reconciliation

## react事件机制，合成事件，dispatch
