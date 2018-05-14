<template>
  <div id="login" class="login">
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="4" offset-md="8">    
          <div class="background-white">
          <b-row>
            <div class="middle">
              <p>
                  Yuk buat moment sholat jadi <br>
                  menyenangkan! ikutan <br>
                  <strong>
                    #Let'sSholatBersamaAyah!
                  </strong>
                </p>
            </div>
            <div class="clearfix"></div>
            <b-col cols="12">
              <a  @click="auth()">
                <b-button class="btn-fb">
                  <b-img :src="require('../assets/iconfb.png')"/>
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
          let url = this.apiUrl+'api/login/facebook';
          axios.get(url)
            .then(response => {
              // JSON responses are automatically parsed.
              console.log(response);
              window.location = response.data.result.redirect_url
            })
            .catch(e => {
              this.errors.push(e)
         })
      }
  }, 
  created(){
    var userString = localStorage.getItem('user');
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
      background-image: url('../assets/bannerlogin.jpg');
      height: 662px;
      background-size: cover;
      width: 100%;
      position: relative;
  }
  .background-white {
    min-height: 0px;
    display: block;
    align-items: center;
    margin-top: 350px;
  }
  .middle {
    margin-right: 10px;
  }
  .middle P {
    font-size: 14px;
  }
  .btn-fb {
    margin-top: 20px;
    float: right;
    background-color: #495B95;
    border-radius: 6px;
    border: none;
    padding: 10px 20px;
  }
  span.title-btn {
  margin-left: 5px;
  font-size: 14px;
}
}
</style>
