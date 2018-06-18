<template>
  <div id="voting">
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="12" class="nopadding">
            <div class="nopadding vote1">

            </div>
            <div class="vote2">
              <b-col cols="12" md="8" offset-md="2">
                <p class="text-vote2">Yuk, simak cerita Inspiratif mereka pada profil mereka 
                  dibawah ini dan berikan voting terbaik untuk 
                  kontestan Challenge #LetsSholatBersamaAyah favoritmu!
                </p>
              </b-col>
                <vote-single v-for="(finalist,index) in voteBio" :key="index"  :finalist="finalist" :isAlreadyVote="isAlreadyVote"/>
            </div>
            <div class="vote3">
              <b-col cols="12" md="10" offset-md="1">
                <b-img :src="require('../assets/titlevote2.png')" fluid/>
                <b-row>
                  <votecandidate :voteBio="voteBio"/>
                </b-row>
              </b-col>
            </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import votecandidate from '@/components/votecandidate'
import VoteSingle from '@/components/VoteSingle'
import axios from 'axios'

export default {
  name: 'voting',
  components: {
    votecandidate,
    VoteSingle
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLogin: false,
      isAlreadyVote: false,
      voteBio: [],
    }
  },
  watch: {
    voteBio: function(val){
      this.voteBio = val;
    }
  },
  created: function(){
    let user = this.getUser();
    (user != null) ? this.isLogin = true : this.isLogin = false;
    this.checkVote();
    this.loadDataVote();
  },
  methods: {
    loadDataVote: function() {
      var self = this
      axios.get(this.apiUrl+'api/finalists')
      .then(response =>{
        let finalists = response.data.result.finalists
        this.$set(this, 'voteBio', finalists)
      })
      .catch(e => {

      })
    },
    getUser: function(){
      return JSON.parse(this.$cookie.get('user'));  
    },
    checkVote: function(){
      var self = this
      let params = {
        fb_id: this.getUser().fb_id
      }
      axios.post(this.apiUrl+'api/vote/check', params)
      .then(response =>{
        this.$set(this, 'isAlreadyVote', response.data.result.has_vote);
      })
      .catch(e => {

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vote1 {
    background-image: url('../assets/votebackground.jpg');
    height: 662px;
    background-size: cover;
    width: 100%;
    z-index: 2;
}
.vote2 {
    background-image: url('../assets/vote2.png');
    background-size: 100% 100%;
    width: 100%;
    z-index: 5;
    margin-top: -95px;
    padding-bottom: 40px;
}
p.text-vote2 {
    padding-top: 180px;
    font-size: 28px;
    font-weight: 600;
    color: #695C54;
    margin-bottom: 40px;
}
p {
    width: 100%;
    margin:0px auto;
    font-size: 14px;
}
.columnvote {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px;
}
.col-vote {
  padding: 30px 20px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 20px 0px 40px;
  box-shadow: 0px 5px 30px 0px #4a4a4a;
}
.voteImg {
  width: 150px;
  border-radius: 50%;
}
.voteText {
  font-size: 27px;
}
.voteText2 {
  font-size: 22px;
}
.star {
  float: left;
  margin-right: 10px;
}
.point-text {
  font-size: 20px;
  margin-top: 2px;
}
.vote-btn {
  background-color: #ECA926;
  padding: 5px 40px;
  border: none;
  margin-right: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.profile-btn {
  background-color: #ffffff;
  padding: 5px 35px;
  margin-right: 20px;
  color: #ECA926;
  font-size: 16px;
  border: 1px solid #ECA926;
}
.vote3 {
  background-color: #ffffff;
  padding: 30px;
}
.popular-text {
  font-size: 20px;
}
@media screen and (max-width: 450px) {
  .vote1 {
    background-image: url('../assets/vote1mobile.png');
    background-size: 100% 100%;
    height: 280px;
    width: 100%;
    z-index: 2;
}
.vote2 {
    background-image: url('../assets/vote2mobile.png');
    background-size: 100% 100%;
    width: 100%;
    z-index: 5;
    margin-top: -75px;
    padding-bottom: 40px;
}
p.text-vote2 {
  font-size: 18px;
  padding-top: 80px;
}
.voteText {
  font-size: 17px;
}
.voteText2 {
  font-size: 14px;
}
.point-text {
  font-size: 13px;
  margin-top: 2px;
}
.star {
  width: 20px;
}
.popular-text {
  font-size: 13px;
}
.profile-btn {
  margin-right: 5px;
  padding: 5px 10px;
}
.vote-btn {
  margin-right: 20px;
  padding: 5px 15px;
}
}
</style>
