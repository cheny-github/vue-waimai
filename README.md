# vue-project-waimai

## 使用vuex
store文件夹下建立如下文件

* state.js
* mutations.js
* actions.js
* getters.js

按如下顺序编写四个文件。

1. state

2. actions

   > actions是一个包含多个回调函数的对象。

   > 每个回调函数的第一个参数是一个`object`,从里面可以拿到state对象和  commit方法。
   >
   > 在这里拿到的state，我们一般只进行读操作 

   > commit方法用于向mutation提交要进行的修改操作以及要修改的数据。commit的调用时机决定了修改state的时机。因此可以异步调用commit达到异步修改state目的。

3. mutations

    mutations是一个包含多个回调函数的对象。

    每个回调函数的第一个参数是state,第二个参数是action传过来的数据

    mutations是同步执行的

4. getters

四个文件都向外暴露一个对象。



## Vue.prototype.$store.dispatch

接受参数

1. `actionName:string`

   与actionName对应的action会被调用

2. `rest`

   剩余参数会被传入的对应的action中



`_`,`$`开头的属性不被vue代理





## 直接访问某个子路由，静态引入的文件失效

由于采用的是broswer的路由，页面中的相对路径的计算都是根据当前地址栏中的url计算的。直接访问2+级路由会导致路径的计算错误。

好习惯：

index.html页面中引入静态资源时使用绝对路径。

