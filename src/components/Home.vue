<template>
  <div id="home">
      <b-container fluid>
        <b-row>
          <div class="nopadding homecls">
              <div class="">
                <b-img @click="goto('check')" class="icon-btn-dropdown" :src="require('../assets/dropdown.png')" fluid/>
              </div>
          </div>
          <b-col cols="12" class="sub-homecls" id="porto">
            <div id="check" class="sub-homecls-second">
              <p class="title-subhome green">Yuk Ikutan <strong>#LET'SSHOLATBERSAMAAYAH !</strong></p>
              <h1 class="title-subhome-big green">KONTESTAN SEBELUMNYA</h1>
              <b-row>
                <b-col cols="8">
                  <div class="slider">
                    <slick ref="slick" :options="slickOptions">
                      <div v-for="(img,index) in imgSlide" :key="index">
                        <b-img class="background-img" :src="require('../'+img)" fluid />
                      </div>
                    </slick>
                  </div>
                </b-col>
                <b-col cols="4">
                  <div class="middle">
                    <p>
                    Berikut ini <br>
                    beberapa kisah <br>
                    <strong>#Lets'SholatBer<br>samaAyah</strong> 
                    yang telah <br> menjadi inspirasi <br>
                    banyak keluarga <br>
                    </p>
                    <router-link to="/">
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
            <b-button class="btn-dftr">
              <span class="white">DAFTAR SEKARANG</span>
            </b-button>
            <h1 class="title-subhome-big green" style="margin-top: 80px;">TENTANG #LET'SSHOLATBERSAMAAYAH</h1>
            <p class="about-text" style="margin-bottom: 40px;">
              Ayo buat pendidikan sholat untuk anak jadi makin berkesan dengan <br>
              mengikuti Challange berupa Photo Contest dengan tema "Let's Sholat <br> 
              Bersama Ayah" Mari bersama-sama kita tumbuhkan generasi penerus <br>
              menjadi orang-orang yang mencintai sholat!
            </p>
          </b-col>
          <b-col>
            <div>
              <youtube :video-id="videoId" player-width="800" player-height="400" :player-vars="{autoplay: 0}"></youtube>
            </div>
          </b-col>
          <b-col cols="12">
            <h1 class="title-subhome-big green" style="margin-top: 40px;">APA SAJA SYARAT MENGIKUTI <br>
              #LET'SSHOLATBERSAMAAYAH ?
            </h1>
            <b-row>
              <b-col cols="4">
                <b-img :src="require('../assets/dropdown.png')" fluid/>
                <p>Muslim</p>
              </b-col>
              <b-col cols="4">

              </b-col>
              <b-col cols="4">

              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
import slick from 'vue-slick'
import axios from 'axios'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default {
  name: 'Home',
  components: { 
    "slick": slick,
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      slickOptions: {
        slidesToShow: 2,
        infinite: true,
        speed: 300,
        arrow: false,
        prevArrow: '<img class="slick-prev" src="../../static/left.png">',
        nextArrow: '<img class="slick-next" src="../../static/right.png">'
      },
      imgSlide: [
        "assets/4foto.jpeg",
        "assets/5foto.jpeg",
        "assets/4foto.jpeg",
        "assets/5foto.jpeg",
      ],
      videoId: '_7ouPGxu0OE',
    }
  },
  methods: {
    loadDataImageChamp: function() {
        var self = this;
        axios.get('/static/logo.json')
        .then(function (response){
          self.champimage = response.data.result.data;
        })
        .catch(function (error){
          self.champimage = 'error dude' + error;
        })
    },
    goto(refName) {
        var element = document.querySelector('#'+refName);
        var rect = element.getBoundingClientRect();
        $('html, body').animate(
            {scrollTop: rect.top}, 
        1000);
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'roboto';
  src: url('../../static/font/roboto.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'plumpfull';
  src: url('../../static/font/plumpfull.ttf');
  font-weight: normal;
  font-style: normal;
}
.green {
  color: #5D6937;
}
.white {
  color: #ffffff;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
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
</style>
