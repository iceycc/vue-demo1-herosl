export default {
  template: `
      <div :class=color>
         ID:<input type="text" v-model="addId" />
         英雄名称: <input type="text" v-model="addName" />
         <button @click="addHero">添加英雄</button>
      </div>  
  `,
  data() {
    return {
      color: "y-g",
      addId:"",
      addName:"",
    }
  },
  methods: {
    // 添加英雄
    addHero() {
      this.heros.push({
        id: this.addId,
        name: this.addName
      });
      //清空添加
      this.addId = '';
      this.addName = '';
    }
  }
}