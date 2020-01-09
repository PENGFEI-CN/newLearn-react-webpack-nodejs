# typescript

## 基础类型

    * 布尔值、字符串、数字、数组
    * 元组：
    ```
    let x:[string,number]; //(越界元素会使用联合类型，比如前面的第三个元素的话需要时string｜number类型)
    ```
    * 枚举
    ```
    enum Color {Red, Green, Blue}
    let c: Color = Color.Green;
    ```
    * any 程阶段还不清楚类型的变量指定一个类型
    * void（没有任何类型只能赋值null｜undefined）、null、undefined
        + 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。 
    * Never
        + never类型表示的是那些永不存在的值的类型。 
    * Object
        + object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

### 类型断言
        尖括号或者as
        ```
        let someValue: any = "this is a string";
        let strLength: number = (<string>someValue).length; 
        let strLength: number = (someValue as string).length; 
        ```

## 接口

    * interface 
    ```
    interface LabelledValue {
        label: string;
    }
    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }
    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);
    ```
    * 可选属性，label?: string
    * 只读属性readonly｜ReadonlyArray<T>类型：
        ```
        interface Point {
            readonly x: number;
            readonly y: number;
        }
        let a: number[] = [1, 2, 3, 4];
        let ro: ReadonlyArray<number> = a;
        ```
        + readonly vs const
            最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
