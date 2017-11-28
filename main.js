// 启动配置文件
import Vue from "./vue";
import App from "./App";
import List from "./List.js"


Vue.component('hero-list',List)





new Vue({
  el:"#app",
  render:c=>c(App)

})