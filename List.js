export default {
  template: `
    <div>
      <ul :class=color>
        <li v-for="(hero,index) in heros" :key="index">
          {{hero.id}}  {{hero.name}}
        </li>
      </ul>  
    </div>  
  `,
  props: ["heros"],
  data() {
    return {
      color: 'red'
    }
  }
}