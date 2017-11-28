// var App = {
export default {
  template: `
  <div>
    //英雄列表
    <hero-list :heros="heros"></hero-list>

    
   //添加英雄
    <hero-add></hero-add>
    <!--  //修改英雄
    <hero-updata></hero-updata>
    //删除英雄
    <hero-del></hero-del> --> 
  </div>  
  `,
  data() {
    return {
      heros: [{
        id: 1,
        name: '杨玉环'
      }, {
        id: 2,
        name: '王昭君'
      }, {
        id: 3,
        name: '西施'
      }, {
        id: 4,
        name: '貂蝉'
      }]
    }
  }
}