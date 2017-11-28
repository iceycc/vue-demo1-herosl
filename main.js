// 启动配置文件
import Vue from "./vue";
import App from "./App";
import List from "./List.js";
import Add from "./Add.js";
import Updata from "./Updata.js";



Vue.component('hero-list',List);
Vue.component('hero-add', Add);
Vue.component('hero-updata', Updata);






new Vue({
  el:"#app",
  render:c=>c(App)

})