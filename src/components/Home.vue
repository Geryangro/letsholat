<template>
  <div id="home">
      <b-container fluid>
        <b-row>
          <b-col cols="12" class="nopadding">
            <div class="nopadding homecls">
              <div class="">
                <b-img @click="goto('form')" class="icon-btn-dropdown" :src="require('../assets/dropdown.png')" fluid/>
              </div>
            </div>
          </b-col>
          <b-col cols="12" class="sub-homecls" id="porto">
            <div id="check" class="sub-homecls-second">
              <p class="title-subhome green">Yuk Ikutan <strong>#LET'SSHOLATBERSAMAAYAH !</strong></p>
              <h1 class="title-subhome-big green">KONTESTAN SEBELUMNYA</h1>
              <b-row>
                <b-col cols="12" md="8">
                  <div class="slider">
                    <slick ref="slick" :options="slickOptions">
                      <div v-for="(img,index) in imgSlide" :key="index">
                        <b-img class="background-img" :src="require('../'+img)" fluid />
                      </div>
                    </slick>
                    <div class="phone">
                      <p>lihat kisah #let'sSholatBersamaAyah lainnya</p>
                      <router-link to="/candidate"><button class="btn-lets"><span>klik disini</span></button></router-link>
                    </div>
                    
                  </div>
                </b-col>
                <b-col cols="12" md="4">
                  <div class="middle">
                    <p>
                    Berikut ini <br>
                    beberapa kisah <br>
                    <strong>#Lets'SholatBer<br>samaAyah</strong>
                    yang telah <br> menjadi inspirasi <br>
                    banyak keluarga <br>
                    </p>
                    <router-link to="/candidate">
                      <b-button class="btn-lets">
                        <span>klik disini</span>
                      </b-button>
                    </router-link>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="12" class="nopadding">
            <div class="sub-price"></div>
            <b-button @click="goto('form')" class="btn-dftr">
              <span class="white">DAFTAR SEKARANG</span>
            </b-button>
            <b-col cols="12" class="col-text-about">
              <h1 class="title-subhome-big green">TENTANG #LET'SSHOLATBERSAMAAYAH</h1>
              <p class="about-text">
                Ayo buat pendidikan sholat untuk anak jadi makin berkesan dengan 
                mengikuti Challange berupa Photo Contest dengan tema "Let's Sholat  
                Bersama Ayah" Mari bersama-sama kita tumbuhkan generasi penerus 
                menjadi orang-orang yang mencintai sholat!
              </p>
            </b-col>
          </b-col>
          <b-col>
            <div v-if="$resize && $mq.above(992)">
              <youtube :video-id="videoId" player-width="800" player-height="400" :player-vars="{autoplay: 0}"></youtube>
            </div>
            <div v-else>
              <youtube :video-id="videoId" player-width="300" player-height="200" :player-vars="{autoplay: 0}"></youtube>
            </div>
          </b-col>
          <b-col cols="12">
            <b-col class="col-text-about">
              <h1 class="title-subhome-big green">APA SAJA SYARAT MENGIKUTI <br>
              #LET'SSHOLATBERSAMAAYAH ?
              </h1>
            </b-col>
            <b-row>
              <b-col cols="12" md="10" offset-md="1" style="padding-top: 60px;">
                <b-row>
                  <b-col cols="12" md="4" v-for="(logo,index) in logoText" :key="index">
                    <div class="col-logo">
                      <b-img class="" :src="logo.image" fluid/>
                      <p class="logo-text">{{logo.title}}</p>
                    </div> 
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" class="nopadding">
            <div class="col-orange">
              <b-col class="col-text-about">
                <h1 class="title-subhome-big white">KRITERIA PEMENANG CHALLANGE <br> 
                  #LET'SSHOLATBERSAMAAYAH
                </h1>
              </b-col>
              <b-col cols="12" md="8" offset-md="2">
                <b-col class="col-text-about">
                  <ol class="winner-criteria">
                    <li>
                      <strong> Dewan juri akan memilih 5 peserta dengan foto dan cerita terbaik.</strong>
                      <br>
                      <p>(Catatan: Kelima peserta ini akan divoting oleh publik 
                        untuk <br> menentukan 1 pemenang utama dan 4 pemenang terbaik)</p>
                    </li>
                    <li>
                      <strong> 5 pemenang terunik dinilai dari peserta dengan moment sholat terunik.</strong>
                    </li>
                    <li>
                      <strong> 1 pemenang favorit dinilai dari like terbanyak.</strong>
                    </li>
                  </ol>
                </b-col>
              </b-col>
            </div>
          </b-col>
          <b-col  cols="12" class="" v-if="!isRegistered"> 
            <b-row>
              <div id="grass" class="background-grass">
                <b-col class="col-text-about">
                  <h1 class="brown title-subhome-big">DAFTARKAN KELUARGA AYAH DAN BUNDA 
                  DENGAN MENGISI FORM DI BAWAH INI!
                </h1>
                </b-col>
                <b-col cols="12" md="10" offset-md="1" style="margin-top: 40px;">
                  <form-register></form-register>
                </b-col>
              </div>
            </b-row>
          </b-col>
          <bannerlast style="margin-top: -110px;"/>
          <bootfoot class="dekstop"></bootfoot>
          <copyright></copyright>
        </b-row>
      </b-container>
  </div>
</template>

<script>
import bannerlast from '@/components/bannerlast'
import bootfoot from '@/components/footer'
import copyright from '@/components/copyright'
import formRegister from "@/components/FormRegister"
import slick from 'vue-slick'
import axios from 'axios'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default {
  name: 'Home',
  components: {
      slick,
      bootfoot,
      copyright,
      bannerlast,
      formRegister
  },
  data () {
    return {
      isRegistered: false,
      user: null,
      show: true,
      types: [
        'Nama',
        'Usia',
        'Nama Ayah',
      ],
      // slider
      slide: 0,
      sliding: null,
      slickOptions: {
        slidesToShow: 2,
        infinite: true,
        speed: 300,
        arrow: false,
        prevArrow: '<img class="slick-prev" src="../../static/left.png">',
        nextArrow: '<img class="slick-next" src="../../static/right.png">',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              prevArrow: '<img class="slick-prev" src="../../static/left.png">',
              nextArrow: '<img class="slick-next" src="../../static/right.png">',
              slidesToShow: 1
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              prevArrow: '<img class="slick-prev" src="../../static/left.png">',
              nextArrow: '<img class="slick-next" src="../../static/right.png">',
              slidesToShow: 1
            },
          }
        ],
      },
      imgSlide: [
        "assets/4foto.jpeg",
        "assets/5foto.jpeg",
        "assets/Foto (1).jpg",
        "assets/Foto (2).jpg",
        "assets/Foto (3).jpg",
        "assets/Foto (4).jpg",
        "assets/Foto (5).jpg",
        "assets/Foto (6).jpg",
        "assets/Foto (7).jpg",
        "assets/Foto (8).jpg",
        "assets/Foto (9).jpg",
        "assets/Foto (10).jpg",
      ],
      logoText: [],
      videoId: 'nc-6T0nWrGc',
    }
  },
  watch: {
    logoText: function(val){
      this.logoText = val;
    },
    user: function(val){
      this.fetchProfile();
      
    }
  },
  created: function(){
    let user = this.getUser();
    if(!user){
      this.$router.push({path: '/'});
    }
    this.user = user;
    this.loadData();
  },
  methods: {
    goto(refName) {
        var element = document.querySelector('#'+refName);
        console.log(element);
        var rect = element.getBoundingClientRect();
        console.log(rect);
        $('html, body').animate(
            {scrollTop: rect.top + window.pageYOffset - 20},
        1000);
    },
    loadData: function() {
        var self = this;
        axios.get('/static/logo.json')
        .then(function (response){
          self.logoText = response.data.result.data;
        })
        .catch(function (error){
          self.logoText = 'error dude' + error;
        })
    },
    setImage: function (file) {
      this.hasImage = true
      this.image = file
    },
    next() {
      console.log('test');
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
            this.$refs.slick.reSlick();
        });
    },
    ready (player) {
      this.player = player
    },
    playing (player) {
      // The player is playing a video.
    },
    method (url) {
      this.videoId = this.$youtube.getIdFromURL(url);
      this.startTime = this.$youtube.getTimeFromURL(url);
    },
    getUser(){
      return JSON.parse(localStorage.getItem('user'));  
    },
    fetchProfile(){
      let url = this.apiUrl+'api/participant/'+this.user.fb_id
      axios(url).then(response =>{
        let participant = response.data.result.participant;
        if(participant){
          this.$set(this, 'isRegistered', true);
        }
      }).catch(e => {

      });
    }    
  },
  mounted: function() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.homecls {
    background-image: url('../assets/home.png');
    height: 700px;
    background-size: cover;
    width: 100%;
    z-index: 10;
    display: block;
    position: relative;
}
img.icon-btn-dropdown {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    animation: flow 1.5s ease-in-out infinite;
}
@keyframes flow {
   0% {

    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
  50% {

    -webkit-transform: translatey(-20px);
            transform: translatey(-20px);
  }
  100% {

    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
}
.sub-homecls {
    background-color: #eeeff1;
    width: 100%;
    height: 780px;
    z-index: 5;
    display: block;
    margin-top: -100px;
}
.sub-homecls-second {
  height:500px;
  padding: 40px 10px 10px;
  margin-top: 80px;
}
.title-subhome {
  margin-top: 20px;
  font-size: 28px;
  font-family: 'roboto';
  letter-spacing: 1px;
}
.title-subhome-big {
  font-family: 'plumpfull';
}
.slider {
  padding: 20px 40px;
  position: relative;
}
.background-img {
  padding: 20px;
  height: 400px;
}
.middle {
  background-color: #ffffff;
  padding: 20px 10px;
  border-radius: 10px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  display: block;
}
.middle P {
  font-size: 20px;
}
.btn-lets {
  background-color: #F69520;
  border: none;
  border-radius: 20px;
  padding: 4px 20px;
  width: 150px;
}
.btn-lets:hover {
  background-color: #F69520;
  border: none;
  border-radius: 20px;
  padding: 4px 20px;
  width: 150px;
  box-shadow: 0px 0px 2px 3px #C26F29;
}
.sub-price {
  background-image: url('../assets/prize.jpg');
  height: 640px;
  background-size: cover;
  width: 100%;
  z-index: 10;
  display: block;
  position: relative;
}
.btn-dftr {
  background-color: #F69520;
  border: none;
  border-radius: 10px;
  padding: 4px 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  border-bottom: 6px solid #C26F29;
  width: 400px;
}
.btn-dftr:hover {
  box-shadow: 0px 2px 3px 3px #888;
}
.btn-dftr span {
  font-size: 25px;
  font-family: 'plumpfull';
}
.about-text {
  font-size: 20px;
  letter-spacing: 1px;
}
.col-text-about {
  margin: 20px auto 0px;
  padding: 20px 0px;
  width: 600px;
}
.col-logo {
  padding: 20px;
}
.logo-text {
  font-size: 24px;
  width: 300px;
  text-align: center;
  margin: 10px auto;
}
.col-orange {
  background-color: #F69520;
  display: block;
  padding: 70px 0px 50px;
}
ol.winner-criteria {
  padding: 20px 0px;
  text-align: left;
  color: #ffffff;
  list-style-type: decimal !important;
  
}
ol.winner-criteria li {
  width: 100%;
  font-size: 24px;
  letter-spacing: 1px;
  padding: 20px 0px;
}
ol.winner-criteria li > p {
  width: 100%;
  font-size: 20px;
  letter-spacing: 1px;
  padding: 10px 0px;
}
.background-grass {
  background-image: url('../assets/grass.png');
  padding: 80px 10px 40px;
  background-size: cover;
  height: 1300px;
  width: 100%;
  z-index: 10;
  display: block;
  position: relative;
  margin-top: -40px;
}
.upload-img {
  width: 100%;
  background-color: #ffffff;
  height: 300px;
  text-align: left;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
}
.upload-img-striped {
  border: 5px dashed #888;
  border-radius: 10px;
  margin: auto;
  height: 240px;
}
.inputText {
  margin: 0px 0px 20px;
  padding: 15px;
}
.dekstop {
  display: block;
}
.phone {
  display: none;
}
@media screen and (max-width:768px) {
  .homecls {
    background-image: url('../assets/lets.jpg');
    height: 565px;
    background-size: 100% 100%;
    width: 100%;
    z-index: 10;
    display: block;
    position: relative;
  }
  img.icon-btn-dropdown {
    left: 45%;
    bottom: 0;
    transform: translate(-45%, 0%);
    margin-bottom: 60px;
    width: 40px;
  }
  .sub-homecls {
    height: 720px;
  }
  .title-subhome {
    font-size: 16px;
  }
  .title-subhome-big {
    font-size: 25px;
  }
  .middle {
    display: none;
  }
  .background-img {
    padding: 0px;
    height: 300px;
    width: 100%;
    border-radius: 10px;
  }
  .slider {
    padding: 10px 5px;
  }
  .btn-lets > span {
    color: #ffffff;
  }
  .sub-price {
    background-image: url('../assets/BannerHadiah.jpg');
    height: 510px;
    background-size: 100% 100%;
    width: 100%;
    z-index: 10;
    display: block;
    position: relative;
  }
  .btn-dftr {
    width: 300px;
    margin-top: 20px;
  }
  .btn-dftr span{
    font-size: 16px;
  }
  .col-text-about {
    padding: 0px 10px;
    margin-top: 20px;
    width: 430px;
  }
  .col-text-about h1 {
    font-size: 20px;
  }
  .about-text {
    font-size: 16px;
    text-align: center;
  }
  ol.winner-criteria {
  padding: 20px 20px;
  text-align: left;
  color: #ffffff;
  list-style-type: decimal !important;
  
}
ol.winner-criteria li {
  width: 100%;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 20px 0px;
}
ol.winner-criteria li > p {
  width: 100%;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 10px 0px;
}
.background-grass {
  background-image: url('../assets/grass.png');
  padding: 80px 10px 40px;
  background-size: cover;
  height: 1450px;
  width: 100%;
  z-index: 10;
  display: block;
  position: relative;
  margin-top: -40px;
}
.dekstop {
  display: none;
}
.phone {
  display: block;
}
}
</style>
