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

AMD、CMD、CommonJS和ES6的import/export 实际上是程序模块化开发的一种规范或标准，每种标准有自身的实现形式，使用不同的语法结构去实现相同的功能，其中的优劣性各有千秋。

#### 定义

1. AMD：RequireJS（模块化开发框架）是AMD模块化标准或规范的一种实现。AMD提供define(id?, dependencies?, factory);这一简洁的API进行模块的定义。支持非同步加载及按需动态加载。

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

    // 模块调用
    require(["foo","bar"],function(foo,bar){
        // do something
        foo.func();
        bar.func();
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

    // 加载模块
    1.
    require(function(require,exports,module){
        var foo = require("foo");
        // do something
    })

    2.
    require(["foo","bar"],function(foo,bar){
        // do something
    })
    ```

3. CommonJS：nodeJs服务端代码模块的导出导入规范，使用module.exports或exports.name进行调用，加载方式为同步加载

    - 定义模块
  
    以文件作为单个模块进行区分。每个模块有其单独作用域，除非主动定义变量的作用域为全局作用域，否则其他模块无法对当前模块的变量进行读写。


    - 输出模块

    以module.exports对象作为唯一的模块暴露出口，将需要暴露的对象或者变量放到module.exports对象内


    - 加载模块

    使用require方法加载导入模块，通过变量进行接收，相当于module.exports对象的一个副本。

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


## 实战

### 注意的点
- 组件实例中data写成函数的原因是实现组件间的数据
- 分析页面拆分页面组件
- 页面视图级的模块新建`views`目录进行统一管理
- 复用组件放在components目录下管理
- 使用mock数据进行开发调试。根目录创建mock目录建立
- 要使用mock数据需在dev-server.js文件配置服务器端路由


### slot插槽

通过使用slot插槽可以对组件进一步扩展，对于像header和nav等组件可以更加方便地按需要进行内容填充替换。

### 开发过程中善用mock数据进行调试

**定义：**mock数据是指开发过程中或者开发完成后在本地模拟实际的业务数据结构及属性，对程序进行调试。

前端开发过程中使用mock数据有助于提高开发的效率，不必每次调试都要与后端进行联调。

此外，mock数据的结构和属性完全由前端开发者控制，调整起来会更加灵活。

- 在vue脚手架环境下，猜测由于是热重载规则的原因，在项目的根目录下新建的目录不能通过localhost:port/path/goods.json这种形式通过浏览器或接口访问资源。在浏览器上会报404错误，使用代理中间件用接口访问时返回的是js文件和空的HTML文档。当把上述的goods.json移动到static目录下后就可以成功访问，浏览器也不会报错。当前仅仅是发现这个问题，具体原理还不甚了解，仍有待深入细查。


