### 英雄列表  vue模块化小demo

### 用到的技术点

* vue
* webpack 简单应用
* 模块化

#### 模块分目录

* index.html 展示页面
* main.js  启动文件 包括各种配置
* App.js  主组件 页面渲染的主体
* Add.js  子组件1 添加功能
* Del.js  子组件2 删除功能
* Updata.js 子组件3 添加功能

#### 功能分析

* 英雄列表的显示
* 英雄的添加
* 英雄的更新
* 英雄的删除

### 模块的导出和引入 


``` javascript
  //模块导出 
  export default{

  }
````

````javascript
  //模块引入
  import Xx from "./Xx.js";
````

```` javascript
  // 全局声明
  Vue.component('vue-xx', Xx);
````