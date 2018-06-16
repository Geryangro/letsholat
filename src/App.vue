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
.progress-bar {
  background: linear-gradient(left, #3E9D7D, #69C18F), #fec951 !important;
  background: -webkit-gradient(linear, left bottom, right top, from( #3E9D7D), to(#69C18F));
  background: -moz-linear-gradient(to right, #3E9D7D, #69C18F);
}
.vuejs-countdown .digit {
  font-size: 50px !important;
  color: #5B7832 !important;
  font-family: 'plumpfull';
}
.vuejs-countdown li:after {
  font-size: 45px !important;
  right: -16px !important;
  color: #5B7832 !important;
}
.vuejs-countdown .text {
  font-size: 35px !important;
  color: #5B7832 !important;
  font-family: 'plumpfull';
}
@media screen and (max-width: 450px) {
  .vuejs-countdown .digit {
  font-size: 25px !important;
  color: #5B7832 !important;
  font-family: 'plumpfull';
}
.vuejs-countdown li:after {
  font-size: 15px !important;
  right: -16px !important;
  color: #5B7832 !important;
}
.vuejs-countdown .text {
  font-size: 15px !important;
  color: #5B7832 !important;
  font-family: 'plumpfull';
}
}
</style>
