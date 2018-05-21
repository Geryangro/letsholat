<template>
  <div id="login" class="login">
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="4" offset-md="8">    
          <div class="background-white">
          <b-row>
            <div class="middle">
              <p>
                  Yuk buat moment sholat jadi 
                  menyenangkan! ikutan 
                  #Let'sSholatBersamaAyah!
                </p>
            </div>
            <div class="clearfix"></div>
            <b-col cols="12">
              <a  @click="auth()">
                <b-button class="btn-fb">
                  <b-img class="iconfb" :src="require('../assets/iconfb.png')"/>
                  <span class="title-btn">masuk dengan facebook</span>
                </b-button>
              </a>
            </b-col>
          </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      auth(){
          let url = this.apiUrl+'api/login/facebook?redirect='+this.mainUrl+'auth/facebook/callback';
          console.log(url);
          axios.get(url)
            .then(response => {
              // JSON responses are automatically parsed.
              window.location = response.data.result.redirect_url
            })
            .catch(e => {
              this.errors.push(e)
         })
      }
  }, 
  created(){
    if(userString){
      //this.$router.push({path: '/home'});
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
    background-image: url('../assets/background11.jpg');
    height: 662px;
    background-size: cover;
    width: 100%;
}
.background-white {
  min-height: 100vh; 
  display: flex;
  align-items: center;
}
.middle {
  background-color: #ffffff;
  padding: 20px 30px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 340px;
}
.middle P {
  font-size: 20px;
}
.btn-fb {
  margin-top: 20px;
  background-color: #495B95;
  border-radius: 6px;
  border: none;
  padding: 10px 30px;
}
.btn-fb:hover {
  box-shadow: 0px 0px 2px 3px #ffffff;
  background-color: #495B95;
  border-radius: 6px;
  border: none;
}
.btn-fb:focus {
  box-shadow: 0px 0px 2px 3px #ffffff;
  background-color: #495B95;
  border-radius: 6px;
  border: none;
}
span.title-btn {
  margin-left: 5px;
}
@media screen and (max-width:768px) {
  #login {
      background-image: url('../assets/Login.jpg');
      background-size: 100% 100%;
      height: 565px;
      position: relative;
  }
  .background-white {
    min-height: 0px;
    display: block;
    align-items: center;
    margin-top: 265px;
  }
  .middle {
    margin-right: 20px;
    padding: 10px;
    width: 190px;
  }
  .middle P {
    font-size: 14px;
    
    margin-bottom: 0px;
  }
  .btn-fb {
    margin-top: 20px;
    float: right;
    background-color: #495B95;
    border-radius: 6px;
    border: none;
    padding: 10px 10px;
  }
  span.title-btn {
  margin-left: 5px;
  font-size: 14px;
}
.iconfb {
  width: 17px;
}
}
</style>
