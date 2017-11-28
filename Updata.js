export default {
  template: `
    <!--更改功能-->
   <div :class=color>
      ID:<input type="text" v-model="updateId" />
      英雄名称: <input type="text" v-model="updateName" />
      <button @click="updateHero">更新英雄</button>
   </div>
    `,
    props:["heros"],
    data(){
      return {
        updateId:"",
        updateName:"",
        color:"y-g",
      }
    },
    methods:{
      updateHero(){
        // 获取跟新的id
        var heros = this.heros.find(ele => ele.id = this.updateId);
        if(!heros){
          alert("没有找到该英雄");
          return
        }
        // 修改当前的英雄名
        heros.name = this.updateName;
        // 清空添加
        this.updateId = "";
      }
      
    }



}