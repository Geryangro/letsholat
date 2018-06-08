<template>
  <div id="voting">
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="nopadding">
            <div class="nopadding vote1">

            </div>
            <div class="vote2">
                <p class="text-vote2">Yuk, simak cerita Inspiratif mereka pada profil mereka 
                  dibawah ini <br> dan berikan voting terbaik untuk 
                  kontestan Challenge <br> #LetsSholatBersamaAyah favoritmu!
                </p>
                <b-col cols="12" md="8" offset-md="2" v-for="(vote,index) in voteBio" :key="index">
                  <div class="col-vote">
                    <b-row>
                      <b-col md="4">
                        <b-img class="voteImg" :src="vote.image" fluid/>
                      </b-col>
                      <b-col md="4">
                        <div class="text-left">
                          <p class="voteText">{{vote.title}}</p>
                          <p class="voteText2">Umur : {{vote.umur}}</p>
                        </div>                        
                      </b-col>
                      <b-col md="4">
                        <p class="logo-text">{{vote.title}}</p>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
            </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import votecandidate from '@/components/votecandidate'
import axios from 'axios'

export default {
  name: 'voting',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      voteBio: []
    }
  },
  watch: {
    logoText: function(val){
      this.voteBio = val;
    }
  },
  created: function(){
    this.loadDataVote();
  },
  methods: {
    loadDataVote: function() {
      var self = this;
      axios.get('/static/voting.json')
        .then(function (response){
          self.voteBio = response.data.result.data;
          console.log(response);
        })
        .catch(function (error){
          console.log(error);
          self.voteBio = 'error dude' + error;
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
    background-size: cover;
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
}
.voteText {
  font-size: 35px;
}
.voteText2 {
  font-size: 25px;
}
@media screen and (max-width: 450px) {
  p {
    font-size: 12px;
  }
}
</style>
