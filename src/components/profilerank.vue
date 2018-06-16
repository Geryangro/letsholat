<template>
  <b-col md="12" id="profilewinner">
    <b-container fluid>
      <b-col cols="12" md="12" class="profile" v-if="$resize && $mq.above(992)">
        <b-row>
          <b-col cols="4">
            <b-img class="profile-img" :src="require('../assets/Foto (9).jpg')" fluid/>
            <div class="profile-name">
              <p>Kabsyah</p>
              <p>Umur : 3 Tahun</p>
            </div>
          </b-col>
          <b-col cols="8">
            <div class="story">
              <p class="text-story text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <b-button class="btn-vote float-right">
              <span>VOTE</span>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col v-else cols="12" class="nopadding">
        <div class="profile">
          <b-img class="profile-img" :src="require('../assets/Foto (9).jpg')" fluid/>
          <div class="background-white">
            <div class="profile-name">
              <p>Kabsyah</p>
              <p>Umur : 3 Tahun</p>
            </div>
            <div class="point-text">
              <b-img class="star" :src="require('../assets/starmini.png')" fluid/> 
              <p style="font-size: 20px;">2300 Point</p> 
            </div>
            <p class="text-story text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
          </div>
          
        </div>
      </b-col>
    </b-container>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: 'profilewinner',
  components: {  },
  watch: {
    voteBio: function(val) {
      this.voteBio = val;
    },
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      voteBio: [],

    }
  },
  created: function(){
    this.loadDataVoteRank();
  },
  methods: {
    loadDataVoteRank: function() {
      var self = this;
      axios.get('/static/voting.json')
        .then(function (response){
          self.voteBio = response.data.result.data;
        })
        .catch(function (error){
          self.voteBio = 'error dude' + error;
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#profilewinner {
    background-image: url('../assets/backgroundprofile.jpg');
    height: 662px;
    background-size: cover;
    width: 100%;
    z-index: 2;
}
.profile {
  padding-top: 110px;
}
.profile-img {
    width: 200px;
    border-radius: 50%;
}
.profile-name {
  margin-top: 40px;
}
.profile-name p {
  font-size: 30px;
  margin: 0px;
  font-weight: 600;
}
.story {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 30px;
}
.text-story {
  font-size: 22px;
}
.btn-vote {
  margin-top: 60px;
  width: 200px;
  background-color: #ECA926;
  border: none;
}
.btn-vote span {
  font-size: 20px;
  font-family: 'plumpfull';
}
@media screen and (max-width: 450px) {
  #profilewinner {
    background-image: url('../assets/backgroundprofile.jpg');
    background-size: cover;
    width: 100%;
    z-index: 2;
    height: 100%;
    padding: 20px 0px;
}
  .profile {
  padding-top: 60px;
}
.background-white {
  background-color: #ffffff;
  padding: 60px 20px 20px;
  border-radius: 10px;
  margin-top: -40px;
}
  .profile-img {
    width: 120px;
    border-radius: 50%;
}
.profile-name {
  margin-top: -10px;
}
.profile-name p {
  font-size: 20px;
  margin: 0px;
  font-weight: 400;
}
.point-text {
  display: inline-block;
  text-align: center;
  width: 160px;
  margin-top: 10px;
}
.star {
  float: left;
}
.text-story {
  font-size: 18px;
}
}
</style>
