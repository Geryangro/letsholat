<template>
  <div id="profile" class="profile">
        <b-container fluid>
            <b-row v-if="profile">
                <b-col cols="12">
                    <div class="col-profile">
                        <b-col cols="10" offset="1">
                            <b-img class="logo" :src="require('../assets/logolets1.png')" fluid/>
                            <b-img :src="require('../assets/textlogo.png')" fluid/>
                        </b-col>
                        <b-col cols="12" md="6" offset-md="3">
                                <div class="profile-pict">
                                <b-img class="profile-pict-element" :src="apiUrl+'../uploads/'+profile.url_img+'.jpg'" fluid/>
                                <div class="profile-pict_story">
                                    <strong>{{profile.child_name}}, {{profile.age}} tahun</strong>
                                    <p>
                                        Halo pekenalkan nama saya {{profile.child_name}}<br>
                                        {{profile.descriptions}}
                                    </p>
                                </div>
                                <!-- <b-button class="btn-dftr">
                                    <span>Edit Profile Anak</span>
                                </b-button> -->
                            </div>
                            <div class="col-facebook">
                                <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="1"></div>
                                <p>Share dan dapatkan like sebanyak-banyaknya <br>
                                    untuk menjadi <strong>Pemenang Favorite!</strong>
                                </p>
                                <div class="fb-like" 
                                :data-href="mainUrl+'/profile/'+profile.url" 
                                data-layout="button_count" 
                                data-size="large"
                                data-share="true"
                                data-show-faces="true">
                                </div>
                                <h3 class="title-subhome-big black">POPULARITY: {{profile.point}}</h3>
                            </div>
                            </b-col>
                    </div>
                </b-col>
                <bannerlast />
                <bootfoot class="dekstop"/>
                <copyright />
            </b-row>
        </b-container>
    </div>
</template>

<script>
import bannerlast from '@/components/bannerlast'
import bootfoot from '@/components/footer'
import copyright from '@/components/copyright'
import axios from 'axios'

export default {
  name: 'profile',
  components: {
      bannerlast,
      bootfoot,
      copyright
  },
  created: function(){
      let id = this.$route.params.url;
      axios.get(this.apiUrl+'api/participant/'+id)
      .then(response =>{
        let participant = response.data.result.participant
        this.$set(this, 'profile', participant);
      })
      .catch(e => {

      })
      this.$store.dispatch('FB_Parse')
  },
  data () {
    return {
        profile: {},
    }
  },
  watch:{
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#profile {
    padding: 10px 0px 0px;
    background-color: #F5F6F8;
}
img.logo {
    width: 300px;
}
.profile-pict {
    padding: 20px 0px;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 2px 2px 10px 3px #CECFD1;
}
.profile-pict-element {
    margin: 60px 0px 40px;
    border-radius: 15px;
    box-shadow: 2px 2px 10px 3px #CECFD1;
    width: 400px;
}
.profile-pict_story {
    padding: 30px;
    background-color: #E9EDF0;
    width: 400px;
    margin: 10px auto 30px;
    border-radius: 15px;
    text-align: justify;
}
.btn-dftr {
  background-color: #F69520;
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
  margin-bottom: 20px;
  border-bottom: 6px solid #C26F29;
  width: 400px;
}
.btn-dftr:hover {
  box-shadow: 0px 2px 3px 3px #888;
}
.btn-dftr span {
  font-size: 22px;
  font-family: 'roboto';
}
.col-facebook {
    padding: 20px 0px;
    display: inline-block;
    width: 100%;
}
.title-subhome-big {
  font-family: 'plumpfull';
  padding: 30px 0px;
}
.dekstop {
    display: block;
}
@media screen and (max-width:768px) {
    img.logo {
        width: 150px;
    }
    .profile-pict {
        margin-top: 40px;
    }
    .profile-pict-element {
        margin: 30px 0px 40px;
        border-radius: 15px;
        box-shadow: 2px 2px 10px 3px #CECFD1;
        width: 250px;
    }
    .profile-pict_story {
        padding: 30px 10px;
        background-color: #E9EDF0;
        width: 250px;
        margin: 10px auto 30px;
        border-radius: 15px;
        text-align: justify;
    }
    .btn-dftr {
        background-color: #F69520;
        border: none;
        border-radius: 10px;
        padding: 8px 20px;
        margin-bottom: 20px;
        border-bottom: 6px solid #C26F29;
        width: 250px;
    }
    .dekstop {
        display: none;
    }
}
</style>
