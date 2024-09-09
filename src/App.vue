<template>
<HeaderComponent></HeaderComponent>
<MyMainComponent></MyMainComponent>
</template>

<script>

import HeaderComponent from './components/Header.vue';
import MyMainComponent from './components/mymain.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MyMainComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: Arial, sans-serif;
    color: #333;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
body{
  background-color: #fafafa;
}
</style>
