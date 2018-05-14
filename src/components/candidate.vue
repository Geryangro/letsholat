<template>
  <div id="candidate">
    <b-container fluid>
      <b-row>
        <div class="nopadding candidatecls">
              <div class="">
                <b-img @click="goto('check')" class="icon-btn-dropdown" :src="require('../assets/dropdown.png')" fluid/>
              </div>
        </div>
        <b-col cols="12">
          <b-row>
            <div id="check" class="find-candidate">
              <b-col cols="12" md="10" offset-md="1">
                <b-row>
                  <b-col cols="8" md="8">
                    <b-form-input class="inputText" id="exampleInput1" type="text" v-model="search"
                            placeholder="Cari Anak">
                    </b-form-input>
                  </b-col>
                  <b-col class="nopadding" cols="4" md="4">
                    <b-button class="btn-search">
                      <span>CARI</span>
                    </b-button>
                  </b-col>
                  <b-col cols="12">
                    <b-row>
                      <pagentry :entrys="entrys"/>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </div>
            <div class="sub-price"></div>
            <div class="col-orange dekstop">
              <h2 class="title-subhome-big brown">Yuk, didik anak kita agar mencintai sholat <br>
                Lewat keteladanan para ayah!
              </h2>
              <b-button class="btn-white">
                <span class="brown">Daftar Sekarang</span>
              </b-button>
            </div>
            <bootfoot class="dekstop"/>
            <copyright />
          </b-row>
          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import bootfoot from '@/components/footer'
import copyright from '@/components/copyright'
import pagentry from '@/components/pagentry'
import axios from 'axios'

export default {
  name: 'candidate',
  components: {
    pagentry,
    bootfoot,
    copyright
  },
  data () {
    return {
      search: '',
      entrys : []
    }
  },
  created: function(){
    this.loadEntry();
  },
  methods: {
    goto(refName) {
        var element = document.querySelector('#'+refName);
        var rect = element.getBoundingClientRect();
        $('html, body').animate(
            {scrollTop: rect.top}, 
        1000);
    },
    loadEntry: function() {
        var self = this;
        let url = this.apiUrl+'index.php/api/participants';
        axios.get(url)
        .then(function (response){
          console.log(response);
          self.entrys = response.data.result.participants;
        })
        .catch(function (error){
          self.entrys = 'error dude' + error;
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.candidatecls {
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
.find-candidate {
  background-color: #EEEFF1;
  width: 100%;
  padding: 100px 0px 30px;
  margin-top: -80px;
}
.btn-search {
  background-color: #F69520;
  border: none;
  border-radius: 10px;
  padding: 4px 20px;
  margin: 0px 40px 0px;
  border-bottom: 6px solid #C26F29;
  width: 300px;
}
.btn-search:hover {
  box-shadow: 0px 2px 3px 3px #888;
}
.btn-search span {
  font-size: 18px;
  font-family: 'plumpfull';
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
.col-orange {
  background-color: #F69520 ;
  padding: 60px 20px 60px;
  width: 100%;
}
.title-subhome-big {
  font-family: 'plumpfull';
}
.btn-white {
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
  margin: 30px 40px;
  border-bottom: 6px solid #E3D5C9;
  width: 400px;
}
.btn-white:hover {
  box-shadow: 0px 2px 3px 3px #3F3933;
}
.dekstop {
  display: block;
}
.btn-white span {
  font-size: 26px;
  font-family: 'plumpfull';
}
@media screen and (max-width: 768px) {
  .candidatecls {
    background-image: url('../assets/homemobile.png');
    height: 600px;
    background-size: cover;
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
    width: 50px;
  }
  .btn-search {
    background-color: #F69520;
    border: none;
    border-radius: 10px;
    padding: 4px 20px;
    margin: 0px 0px 0px;
    border-bottom: 6px solid #C26F29;
    width: 120px;
  }
  .sub-price {
    background-image: url('../assets/prizemobile.jpg');
    height: 600px;
    background-size: 100% 100%;
    width: 100%;
    z-index: 10;
    display: block;
    position: relative;
  }
  .dekstop {
    display: none;
  }
}
</style>
