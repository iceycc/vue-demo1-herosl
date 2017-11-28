export default {
  template: `
      <!--删除功能-->
    <div :class=color>
       ID:<input type="text" v-model="delId" />
       <button @click="delHero(delId)">删除英雄</button>
    </div>  
  `,
  data(){
    return{
      color:'g-y'
    }
  }



}