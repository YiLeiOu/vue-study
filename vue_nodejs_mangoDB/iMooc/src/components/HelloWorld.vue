<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <Counter :num="num" v-on:increase="increasement" v-on:decrease="decreasement"></Counter>
    <p><span>parent:{{num}}</span></p>
  </div>
  
</template>

<script>
import Counter from './Counter';

export default {
  name: 'HelloWorld',
  
  data () {
    return {
      num: 100,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    increasement(){
      this.num+=2;
    },
    decreasement(){
      this.num-=2;
    }
  },
  components: {
    Counter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
