<template>
  <div id="login" class="login">
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="6" offset-md="4" v-if="$resize && $mq.above(992)">    
          <div class="background-white">
            <b-row>
              <div class="middle">
                <h2>#Let'sSholatBersamaAyah <br> 
                  resmi DITUTUP!
                </h2>
              </div>
              <b-col cols="12">
                <div class="background_opacity">
                  <div class="text_ground">
                    <p>Pengumuman pemenang secara keseluruhan akan resmi <br>
                      diumumkan melalui instagram <a style="color:#D63A8D;" href="https://www.instagram.com/letssholatbersamaayah/">@letsholatbersamaayah</a> 
                    </p>
                  </div>
                  <a  href="https://www.instagram.com/letssholatbersamaayah/">
                    <b-button class="btn-fb">
                      <span class="title-btn">Klik Disini</span>
                    </b-button>
                  </a>
                </div>
                <p class="thank_you">Terimakasih kepada Ayah Bunda yang sudah turut <br> 
                  berpartisipasi pada Challange #Let'sSholatBersamaAyah
                </p>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="12" v-else>
          <div class="middle">
                <h2>#Let'sSholatBersamaAyah <br> 
                  resmi DITUTUP!
                </h2>
                <p>Pengumuman pemenang secara keseluruhan <br> akan resmi 
                  diumumkan melalui instagram:
                </p>
                <a  href="https://www.instagram.com/letssholatbersamaayah/">
                    <b-button class="btn-fb">
                      <span class="title-btn">Klik Disini</span>
                    </b-button>
                  </a>
                <p class="thank_you">Terimakasih kepada Ayah Bunda <br>  yang sudah turut 
                  berpartisipasi pada Challange #Let'sSholatBersamaAyah
                </p>
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
  metaInfo: {
    title: 'Login Lets Sholat',
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
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
    background-image: url('../assets/closingbanner.jpg');
    height: 662px;
    background-size: 100% 100%;
    width: 100%;
}
.background-white {
  min-height: 100vh; 
  display: flex;
  align-items: center;
}
.middle {
  padding: 20px 70px 0px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}
.middle h2 {
  font-size: 40px;
  font-family: 'plumpfull';
  color: #000000;
}
.middle P {
  font-size: 22px;
  font-weight: 600;
}
.background_opacity {
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}
.text_ground {
  opacity: 1;
}
.text_ground p {
  font-size: 22px;
}
.thank_you {
  font-size: 22px;
  margin-top: 30px;
}
.btn-fb {
  background-color: #F69626;
  border-radius: 20px;
  border: none;
  padding: 10px 30px;
  font-size: 20px;
  width: 350px;
  font-family: 'plumpfull';
  border-bottom: 4px solid #E0632B;
}
.btn-fb:hover {
  box-shadow: 0px 0px 2px 3px #ffffff;
  background-color: #E0632B;
  border-radius: 20px;
  border: none;
  border-bottom: 4px solid #E0632B;
}
.btn-fb:focus {
  box-shadow: 0px 0px 2px 3px #ffffff;
  background-color: #E0632B;
  border-radius: 20px;
  border: none;
  border-bottom: 4px solid #E0632B;
}
span.title-btn {
  margin-left: 5px;
}
@media screen and (max-width:768px) {
  .logo {
    display: none;
  }
  #login {
      background-image: url('../assets/closingphone.jpg');
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
    padding: 10px;
  }
  .middle h2 {
    font-size: 22px;
    margin-top: 310px;
  }
  .middle P {
    font-size: 14px;
    
    margin-bottom: 0px;
  }
  .btn-fb {
    margin-top: 10px;
    background-color: #F69626;
    border-radius: 6px;
    border: none;
    padding: 10px 10px;
    width: 200px;
    font-size: 16px;
  }
  span.title-btn {
  margin-left: 5px;
  font-size: 14px;
}
.iconfb {
  width: 17px;
}
.thank_you {
  margin-top: 10px;
}
}
</style>
