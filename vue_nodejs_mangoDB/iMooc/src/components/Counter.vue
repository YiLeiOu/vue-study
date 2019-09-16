<template>
  <div class="counter">
    <button @click="increasement">+</button>
    <button @click="decreasement">-</button>
    <p><span>{{num}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: ['num'],
  data () {
    return {
      num: 10
    }
  },
  methods: {
    increasement(){
      this.$emit('increase');
    },
    decreasement(){
      this.$emit('decrease');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
