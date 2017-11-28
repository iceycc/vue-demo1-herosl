// 启动配置文件
import Vue from "./vue";
import App from "./App";
import List from "./List.js";
import Add from "./Add.js";
import Updata from "./Updata.js";
import Del from "./Del.js";



Vue.component('hero-list',List);
Vue.component('hero-add', Add);
Vue.component('hero-updata', Updata);
Vue.component('hero-del', Del);






new Vue({
  el:"#app",
  render:c=>c(App)

})