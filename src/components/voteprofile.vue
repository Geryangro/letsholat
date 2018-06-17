<template>
  <b-col cols="12" id="voteprofile">
    <b-row>
        <b-col cols="12" md="8" offset-md="2" class="nopadding">
            <b-row>
                <b-col cols="4" md="4">
                    <b-img class="img-logo" :src="apiUrl+'../uploads/'+voteimage.participant.url_img+'.jpg'" fluid/>
                </b-col>
                <b-col cols="8" md="8" class="col-percent">
                    <b-col cols="8" class="bio-percent nopadding">
                        <p class="text-left name-agen">{{voteimage.participant.child_name}}</p>
                        <b-progress class="w-100" variant="blue" :value="counter" :max="max"></b-progress>
                    </b-col>
                    <b-col cols="4" class="percent nopadding">
                        <p class="text-percent" >
                            {{percentage}}%
                        </p>
                    </b-col>
                </b-col>
            </b-row>
        </b-col>
      </b-row>
  </b-col>
</template>

<script>
export default {
  name: 'voteprofile',
  props: ['voterankprofile'],
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
      msg: 'Welcome to Your Vue.js App',
      voteimage: {
        participant: {
          child_name: null,
          url_img: null,
          point: null,
          umur: null
        }
      },
      pageNumber: 0,
      counter: 70,
      max: 100,
      bars: [
         {value: 0},
      ],
      percentage: 0,
    }
  },
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
.col-percent {
    background-color: #ffffff;
    float: left;
    margin: 18px 0px 20px 0px;
    z-index: 1;
    border-radius: 0px 15px 15px 0px;
    padding-left: 30px;
}
#voteprofile {
    margin: 20px 0px;
}
#myprogress {
  border-radius: 20px;
  position: relative;
}
.progress {
  height: 25px;
  border-radius: 20px;
  color: #ffffff;
  font-size: 16px;
}
.page-link {
  font-size: 20px;
  color: #888;
}
.bio-percent {
    float: left;
}
.percent {
  width: 80px;
  float: left;
}
.name-agen {
    margin-top: 2px;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 500;
}
.text-percent {
  margin: 20px 0px 0px -5px;
  font-size: 40px;
  color: #795a5a;
}
.name-agen {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 25px;
    font-weight: 500;
}
p.title {
  margin: 7px 0px 10px 20px;;
  color: #ffffff;
  font-size: 24px;
  float: left;
}
.img-logo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

@-webkit-keyframes bar-before{
  0%{
    width: 0px;
  }
  100%{
    width: 100%;
  }
}
.bg-blue {
  background: linear-gradient(left, #5455A5, #6CBCD3), #fec951 !important;
  background: -webkit-gradient(linear, left bottom, right top, from( #5455A5), to(#6CBCD3));
  background: -moz-linear-gradient(to right, #5455A5, #6CBCD3);
}
@media screen and (max-width: 450px) {
  p {
    font-size: 12px;
  }
  .img-logo {
  width: 70px;
  height: 70px;
}
/* .col-percent {
  padding-left: 10px;
  margin: 10px 0px;
}
.text-percent {
  font-size: 20px;
} */
.col-agen {
    margin-top: 20px;
    margin-right: -15px;
    display: inline-block;
    float: left;
    z-index: 2;
}
  .shadow-radius {
    margin: 10px 15px;
    border-radius: 15px;
    -moz-box-shadow: 0 0 10px 2px #cccccc;
    -webkit-box-shadow: 0 0 10px 2px #cccccc;
    box-shadow: 0 0 10px 2px #cccccc; 
  }
  img.champion-img-right {
    border: 4px solid #ffffff;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: 0px auto 10px;
    float: left;
  }
  .col-percent {
    background-color: #ffffff;
    float: left;
    margin: 0px 0px 10px;
    z-index: 1;
    border-radius: 0px 15px 15px 0px;
    padding-left: 0px;
  }
  .bio-percent {
    float: left;
    margin: 0px 0px 0px -10px;
  }
  #myprogress {
    border-radius: 20px;
    position: relative;
  }
  .progress {
    height: 15px;
    border-radius: 20px;
    color: #ffffff;
    font-size: 16px;
  }
  .name-agen {
    font-size: 20px;
  }
  .percent {
    width: 80px;
    float: left;
    margin-top: 20px;
  }
  .text-percent {
    font-size: 20px;
    float: left;
    margin-top: 5px;
    margin-left: 5px;
  }
}
</style>
