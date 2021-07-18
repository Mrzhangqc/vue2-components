<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Home />
  </div>
</template>

<script>
import Home from './home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
}
body,html{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%
}
</style>
