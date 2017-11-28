export default {
  template: `
      <!--删除功能-->
    <div :class=color>
       ID:<input type="text" v-model="delId" />
       <button @click="delHero(delId)">删除英雄</button>
    </div>  
  `,
  props:["heros"],
  data(){
    return{
      color:"g-y",
      delId:"",
      

    }
  },
  methods:{
    delHero(id){
      // 找到要删除的索引
      var index = this.heros.findIndex(ele => ele.id == id);
      if (index == -1 ){
        alert("没有找到该英雄");
        return
      }
      // 删除
      this.heros.splice(index,1);
    }
  }
}