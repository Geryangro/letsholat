<template>
    <b-col id="bannerlast" cols="12" class="nopadding">
            <router-link to="">
              <b-button class="btn-dftr" style="">
                <span class="white">DAPATKAN DISINI</span>
              </b-button>
            </router-link>
    </b-col>
</template>

<script>
export default {
  name: 'bannerlast',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bannerlast {
    background-image: url('../assets/bannerlast.jpg');
    background-size: cover;
    height: 662px;
    width: 100%;
}
.btn-dftr {
  background-color: #F69520;
  border: none;
  border-radius: 10px;
  padding: 4px 20px;
  margin-top: 40px;
  border-bottom: 6px solid #C26F29;
  width: 400px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -120%);
  margin-left: auto;
  margin-right: auto;
}
.btn-dftr:hover {
  box-shadow: 0px 2px 3px 3px #888;
}
.btn-dftr span {
  font-size: 25px;
  font-family: 'plumpfull';
}
@media screen and (max-width: 768px) {
    #bannerlast {
    background-image: url('../assets/bannerlastmobile.jpg');
    background-size: 100% 100%;
    height: 402px;
    width: 100%;
}
.btn-dftr {
    padding: 4px 20px;
     transform: translate(-50%, -80%);
    width: 300px;
}
.btn-dftr span {
  font-size: 16px;
}
}
</style>
