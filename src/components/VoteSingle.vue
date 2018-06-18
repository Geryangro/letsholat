<template>
     <b-col cols="12" md="8" offset-md="2">
      <div class="col-vote">
        <b-row>
          <b-col cols="4" md="4">
            <b-img class="voteImg" :src="$parent.apiUrl+'../uploads/'+finalist.participant.url_img+'.jpg'" fluid/>
          </b-col>
          <b-col cols="8" md="8">
            <div class="text-left float-left">
              <p class="voteText">{{finalist.participant.child_name}}</p>
              <p class="voteText2">Umur : {{finalist.participant.age}} Tahun</p>
              <br>
              <b-img class="star" :src="require('../assets/starmini.png')" fluid/>
              <p class="point-text">{{finalist.votes_count}} Vote</p>
            </div>
            <b-button class="profile-btn float-right">
              <span>Story</span>
            </b-button>
            <b-button v-if="this.$parent.isAlreadyVote" disable="true" class="vote-btn float-right">
                Anda Sudah Melakukan Vote
            </b-button>
            <b-button v-else-if="this.$parent.isLogin" v-on:click="doVote" class="vote-btn float-right">
                Vote
            </b-button>
            <b-button v-else class="vote-btn float-right">
                Login via Facebook untuk Vote
            </b-button>                        
          </b-col>
        </b-row>
      </div>
     </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VoteSingle',
  props: ['finalist', 'isAlreadyVote'],
  methods: {
    doVote: function(){
        let user = this.$parent.getUser();
        let params = {
            fb_id: user.fb_id,
            finalist_id: this.finalist.id    
        }
        axios.post(this.$parent.apiUrl+'api/vote', params)
        .then(response =>{
            console.log(response);
        })
        .catch(e => {

        })
    }
  },
  watch: {
    voterankprofile: function(val) {
      this.voteimage = val;
    },
        
  },
  created: function(){
      this.voteimage = this.voterankprofile;
  },
  data () {
    return {
      finalistData: {
          
      }
    }
  },
}
</script>

<style scoped>

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
