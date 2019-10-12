## Axios

### axios 基本概要


### 安装axios

- `npm i axios --save` 安装axios依赖

- 页面或组件内引用`axios`。支持`require`、`commandJs`、`AMD`形式引用

### 常用方法

1. get请求
```
axios.get(url,options:{

}).then(res=>{
    res.data
}).catch(err=>{
    console.log(err)
});
```

2. post请求

```
axios.posy(url,body:{

},options:{

}).then(res=>{
    res.data
}).catch(err=>{
    console.log(err)
});

```
3. 执行多个请求

```
axios.all([
    requestA(),
    requestB(),
    ...
]).then(axios.spread((acct,perms)=>{
    
}));

``` 


### axios 返回值

- axios 支持链式编程，通过then()方法返回Promise对象。也可以直接写成这种形式：

```
function requestA(){
    return axios.get(url,options:{});
}

```

- 此外还能结合 async...await... 命令写成顺序执行：

```
let asyncRequest = async()=>{
    let res1 = await axios.get(url,{
        paramrs:{
            userId: 9527
        },
        headers:{
            token: 'qazwsx'
        }
    }).then(res=>{
        return res.data
    }).catch(err=>{
        console.log(err);
    });
    let res2 = await axios.get(url2,{
        paramrs:{
            userId: 9527
        },
        headers:{
            token: 'qazwsx'
        }
    }).then(res=>{
        return res.data
    }).catch(err=>{
        console.log(err);
    });
    return await [res1,res2];
}

// 执行asyncRequest()方法，里面的get请求将顺序执行。post请求的表现同理

```

## ES6使用

### 函数的Rest参数和扩展

Rest也就是`...`的用法相当灵活强大，作为函数参数时可以接收未知数量的参数，作用类似于arguments，可遍历且有对应的长度;跟数组或者字符串结合使用时的表现是将数组或字符串拆分成元素。

- 有哪些作用

    1. 定义未知数量的参数
        ```
        function count(...num){
            let total = 0;
            for( let i of num){
                total+=i;
            }
            console.log(`total:${total}`);
        }
        count(1,2,3,4) // 10
        ```
    2. 与数组结合（函数的扩展）
        ```
        // 数组拼接
        console.log([...[1,2,3],...[4,5,6]])
        //[1, 2, 3, 4, 5, 6]

        // 数组结构赋值
        let [x,...y] = [1,2,3,4];
        console.log(y) // [2,3,4];

        ```

    3. 与字符串结合
        ```
        let strArr = [..."ES6"];
        console.log(strArr) // ["E", "S", "6"]

        let [x,y,z] = [..."ES6"];
        console.log(z) // 6;

        ```

### Promise 使用

#### Promise有什么用？

- Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值.

- Promise的出现是为了解决回调函数多层嵌套的问题，多个回调函数嵌套造成代码难以维护以及难以阅读，而Promise的链式操作就很好地解决了这个问题。

- Promise 实际上是一个函数，使用时通过`new Promise()`进行实例化。

#### 组成

1. Promise 构造函数
2. resolve() 结果接收回调函数
3. reject() 错误处理

#### 一个 Promise有以下几种状态

- pending: 初始状态，既不是成功，也不是失败状态(处理中)
- fulfilled: 意味着操作成功完成（进入resolve函数）
- rejected: 意味着操作失败（进入reject函数）

#### 一般用法
```
let getLoginInfo = ()=>{
  return new Promise((resolve,reject)=>{
      let flag = document.cookie.indexOf("userId") > -1 ? true: false;

      if(flag = true){
          resolve({
              status: 1,
              result: true
          });
      }
  })
}

// 或者

function myAsyncFunction(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        // 请求成功
        xhr.onload = () => resolve(xhr.responseText);
        // 请求失败
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
};

```





### module.exports和ES6的import和export使用

#### export变量暴露

- export 语法将模块中的变量或者对象进行暴露，调用变量或者对象时需要用import命令导入。

- 使用`export default`命令直接导出的是当前实例，配合`import router from "./router" `语法进行调用

- 使用`export let router`命令导出的是对象的引用（即地址指针），这时使用`import router from "./router" `语句就会报错，需要改写成`import {router} from "./router" `


> 暴露有名字的模块都需要使用`import {router} from "./router" `带大括号的语法进行接收，或者`import * as util from "./util" `以此种语法将模块里的所有暴露封装到一个接收对象里面


### AMD、CMD、CommonJS和ES6

#### 定义

1. AMD：RequireJS（模块化开发框架）是AMD模块化标准或规范的一种实现

    ```
    // 动态异步加载模块
    // 依赖前置（需要用到其他模块时在数组参数进行引入）
    define(['package/lib'],function(lib){
        function foo(){
            lib.log("hello world!");
        }
        return{
            foo:foo
        }
    })

    ```

2. CMD：SeaJS是AMD模块化标准或规范的一种实现

    ```
    // 同步加载外部模块
    // 依赖就近（需要用到其他模块时才进行引入）
    define(function(require,exports,module){
        var $ = require("jquery");

        var Router = require("./router");

        return{
            foo:foo
        }
    })

    ```

3. CommonJS：nodeJs服务端代码模块的导出导入规范，使用module.exports或exports.name进行调用

    - 定义模块
    以文件作为单个模块进行区分。每个模块有其单独作用域，除非主动定义变量的作用域为全局作用域，否则其他模块无法对当前模块的变量进行读写。


    - 输出模块

    以module.exports对象作为唯一的模块暴露出口，将需要暴露的对象或者变量放到module.exports对象内


    - 加载模块

    使用require方法加载导入模块，通过变量进行接收，相当于module.exports对象的一个引用。

   ```
   //模块定义 myModel.js

   var name = 'Byron';

   function printName(){
       console.log(name);
   }

   function printFullName(firstName){
       console.log(firstName + name);
   }

   module.exports = {
       printName: printName,
       printFullName: printFullName
   }

   //加载模块

   var nameModule = require('./myModel.js');

   nameModule.printName();

   ```


#### 区别


#### 使用方法


