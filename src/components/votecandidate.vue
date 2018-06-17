<template>
  <b-col md="12" id="votingcandidate" class="nopadding">
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="12" class="nopadding">
            <voteprofile v-for="(voterankprofile, index) in voteRank" :key="index" :voterankprofile="voterankprofile" class="columnvote">
                <!-- <p>TEXT</p> -->
            </voteprofile>
        </b-col>
      </b-row>
    </b-container>
  </b-col>
</template>

<script>
import voteprofile from '@/components/voteprofile'

export default {
  name: 'votingcandidate',
  props: ['voteBio'],
  components: {
    voteprofile
  },
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
.columnvote {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 20px;
}
p {
    width: 100%;
    margin:0px auto;
    font-size: 14px;
}
@media screen and (max-width: 450px) {
  p {
    font-size: 12px;
  }
}
</style>
