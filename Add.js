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
  // 下面data中用到了heros 要在这里先从父组件那里拿到
  props:["heros"],
  methods: {
    // 添加英雄
    addHero() {
      // console.log(this.addId,this.addName)
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