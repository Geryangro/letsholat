<template>
  <b-col md="12" id="announce">
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="12" class="nopadding">
            <h3 class="title">#LET'SSHOLATBERSAMAAYAH</h3>
            <H5 class="title2">WE WILL ANNOUNCE THE SELECTED WINNER <br>
                BE PREPARED
            </H5>
            <Countdown deadline="Juni 25, 2018"></Countdown>
            <P class="text-get">Dapatkan Kaos Lets Sholat Disini !</P>
            <a href="http://bazarafra.com/afrakids">
                <b-button class="btn-bazzar">
                        <span>Bazzarafra.com</span>
                </b-button>
            </a>
        </b-col>
      </b-row>
    </b-container>
  </b-col>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  name: 'announce',
  components: { Countdown },
  watch: {
    voteBio: function(val) {
      this.voteBio = val;
      this.sliceData();
      console.log('test');
    },
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      voteRank: [],
    }
  },
  created: function(){
    this.sliceData();
  },
  methods: {
    sliceData: function(){
      this.voteRank = this.voteBio.slice(0 , 2);
      console.log(voteRank);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#announce {
    background-image: url('../assets/announce.jpg');
    height: 662px;
    background-size: cover;
    width: 100%;
    z-index: 2;
}
p {
    width: 100%;
    margin:0px auto;
    font-size: 14px;
}
.title {
    font-size: 3em;
    margin-top: 155px;
    font-family: 'plumpfull';
    color: #5B7832;
}
.title2 {
    font-size: 1.8em;
}
.text-get {
    font-size: 25px;
}
.btn-bazzar {
    background-color: #ECA926;
    border: none;
    padding: 8px 40px;
    margin-top: 20px;
}
.btn-bazzar span {
    font-size: 25px;
    font-family: 'plumpfull';
}
@media screen and (max-width: 450px) {
  #announce {
    background-image: url('../assets/announcemobile.jpg');
    height: 662px;
    background-size: cover;
    width: 100%;
    z-index: 2;
  }
  .title {
    font-size: 21px;
    margin-top: 25px;
    font-family: 'plumpfull';
    color: #5B7832;
}
.title2 {
    font-size: 20px;
}
.text-get {
    font-size: 20px;
    margin-top: 20px;
}
.btn-bazzar {
    background-color: #ECA926;
    border: none;
    padding: 8px 40px;
    margin-top: 20px;
}
.btn-bazzar span {
    font-size: 20px;
    font-family: 'plumpfull';
}
}
</style>
