<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view class="main" />
    <div class="box">
        <router-view class="left" name='car'/>
        <router-view class="right" name='house'/>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main{
  width: 80%;
  min-height: 30vh;
  margin: 0 auto;
  border: 1px solid #433;
}
.box{
  width: 80%;
  margin: 0 auto;
  zoom: 1;
  /* overflow: hidden; 清浮动 */  
}
.box::after{
  content: ' ';
  display: block;
  clear: both;
  height: 0;
  width: 0;
  visibility: hidden;
}
.left,.right{
  width: 46%;
  min-height: 20vh;
  float: left;
  margin: 1%;
  border: 1px solid #ee00fe;
}
</style>
