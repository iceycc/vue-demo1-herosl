export default {
  template: `
      <div style="background-color:hotpink;">
         ID:<input type="text" v-model="addId" />
         英雄名称: <input type="text" v-model="addName" />
         <button @click="addHero">添加英雄</button>
      </div>
  
  
  `

}