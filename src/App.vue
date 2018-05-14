<template>
  <div id="app">
    <router-view></router-view>
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
}
@font-face {
  font-family: 'roboto';
  src: url('../static/font/roboto.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'plumpfull';
  src: url('../static/font/plumpfull.ttf');
  font-weight: normal;
  font-style: normal;
}
.green {
  color: #5D6937;
}
.white {
  color: #ffffff;
}
.brown {
  color: #3F3933;
}
.nopadding {
  padding: 0px !important;
}
</style>
