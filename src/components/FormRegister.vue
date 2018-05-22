<template>
  <div id="form">
    <b-modal id="myModalRef" ref="myModalRef" hide-footer hide-header>
      <div class="warpModal">
        <div id="loader" class="loader d-block text-center"></div>
        <div class="d-block text-center">
          <p>Sedang mengunggah, mohon tunggu...</p>
        </div>
      </div>
    </b-modal>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row>
        <b-col cols="12" md="4">
        <div class="upload-img">
          <b-form-file v-model="form.image" @change="imageHandler" :state="Boolean(file)" style="display: none;" 
          ref="inputImage">
          </b-form-file>
          <div v-if="!form.image">
            <div class="upload-img-striped text-center" @click="simulateClick($refs.inputImage)">
              <h3 style="margin-top: 60px;">Upload foto <br> Disini <br>
                (Max 2mb & jpg) 
              </h3>
            </div>
          </div>
          <div v-else class="text-center">
            <img class="img-responsive col-md-12 col-xs-12" :src="form.image" />
            <div class="clearfix"></div>
          </div>
          
        </div>
      </b-col>
      <b-col cols="12" md="8">
        <b-form-group id="exampleInputGroup1" label-for="exampleInput1">
          <b-form-input class="inputText" id="exampleInput1" type="text" v-model="form.child_name" required
            placeholder="Masukan Nama Anak">
          </b-form-input>
          <b-form-input class="inputText" id="exampleInput1" type="number" v-model="form.age" required
            placeholder="Masukan Usia Anak">
          </b-form-input>
          <b-form-input class="inputText" id="exampleInput1" type="text" v-model="form.father_name" required
            placeholder="Masukan Nama Ayah">
          </b-form-input>
          <b-form-input class="inputText" id="exampleInput1" type="text" v-model="form.mother_name" required
            placeholder="Masukan Nama Bunda">
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group>
          <b-row>
            <b-col cols="6">
              <b-form-input class="inputText" id="exampleInput1" type="email" v-model="form.parent_email" required
              placeholder="Masukan Email Ayah/Bunda">
              </b-form-input>
            </b-col>
            <b-col cols="6">
              <b-form-input class="inputText" id="exampleInput1" type="number" v-model="form.parent_handphone" required
              placeholder="No.Handphone">
            </b-form-input>
            </b-col>
          </b-row>                       
          <b-form-textarea id="textarea1"
            class="inputText"
            v-model="form.parent_address"
            placeholder="Alamat"
            :rows="3"
            :max-rows="6">
          </b-form-textarea>
          <b-form-textarea id="textarea1"
            class="inputText"
            v-model="form.descriptions  "
            placeholder="Kisah sholat bersama anakku"
            :rows="3"
            :max-rows="6">
          </b-form-textarea>
        </b-form-group>
        
      </b-col>
      </b-row>
      <b-button type="submit" class="btn-dftr">
        <span class="white">DAFTAR</span>
      </b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'FormRegister',
  data () {
    return {
       // upload file
      show: true,
      file: null,
      form: {
        image: '',
        child_name: '',
        age: '',
        father_name: '',
        mother_name: '', 
        parent_handphone: '',
        parent_email: '',
        parent_address: '',
        descriptions: ''
      },
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.submitForm();
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    simulateClick(target){
      
      // this.$refs.modalMask.style.display = "block";
      target.$el.children[0].click();
    },
    showModal () {
      
    },
     hideModal () {
      this.$refs.myModalRef.hide()
    },
    imageHandler(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(files[0]);
    },
    createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
        reader.onload = (e) => {
            this.$set(this.form, 'image', e.target.result);
        };
        reader.readAsDataURL(file);
    },
    removeImage: function (e) {
        this.form.image= '';
    },
    submitForm: function(){
      var self = this;
      let user = JSON.parse(this.$cookie.get('user'));  
      this.$refs.myModalRef.show()
      this.form.access_token = user.access_token;
        this.$set(this, 'loading',true);
        let config = {
            headers: { 
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Content-Type': 'application/x-www-form-urlencoded',
              },
        }
        let uri = this.apiUrl+'api/register';
        axios.post(uri, this.form).then((response) => {
            console.log(response);
            let participant = response.data.result.participant;
            window.location = self.mainUrl+'profile/'+participant.url
        }).catch(e => {
             console.log(e);
         })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warpModal {
  position: relative;
  padding: 10px;
}
.loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #f78;
  background: -moz-linear-gradient(left, #f78 30%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, #f78 30%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, #f78 30%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #f78 30%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #f78 30%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #f78;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader:after {
  background: #ffffff;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
h1, h2 {
  font-weight: normal;
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
  display: block;
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
.col-text-about {
  margin: 20px auto 0px;
  padding: 20px 0px;
  width: 600px;
}
.col-logo {
  padding: 20px;
}
.logo-text {
  font-size: 24px;
  width: 300px;
  text-align: center;
  margin: 10px auto;
}
.col-orange {
  background-color: #F69520;
  display: block;
  padding: 70px 0px 50px;
}
ol.winner-criteria {
  padding: 20px 0px;
  text-align: left;
  color: #ffffff;
  list-style-type: decimal !important;
  
}
ol.winner-criteria li {
  width: 100%;
  font-size: 24px;
  letter-spacing: 1px;
  padding: 20px 0px;
}
ol.winner-criteria li > p {
  width: 100%;
  font-size: 20px;
  letter-spacing: 1px;
  padding: 10px 0px;
}
.background-grass {
  background-image: url('../assets/grass.png');
  padding: 80px 10px 40px;
  background-size: cover;
  height: 1300px;
  width: 100%;
  z-index: 10;
  display: block;
  position: relative;
  margin-top: -40px;
}
.upload-img {
  width: 100%;
  background-color: #ffffff;
  height: 300px;
  text-align: left;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
}
.upload-img-striped {
  border: 5px dashed #888;
  border-radius: 10px;
  margin: auto;
  height: 240px;
}
.inputText {
  margin: 0px 0px 20px;
  padding: 15px;
}
.dekstop {
  display: block;
}
@media screen and (max-width:768px) {
  .loader {
    width: 100px;
    height: 100px;
  }
  .homecls {
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
  .title-subhome {
    font-size: 20px;
  }
  .middle {
    display: none;
  }
  .background-img {
    padding: 0px;
    height: 350px;
    width: 100%;
    border-radius: 10px;
  }
  .slider {
    padding: 10px 5px;
  }
  .btn-lets > span {
    color: #ffffff;
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
  .btn-dftr {
    width: 300px;
    margin-top: 20px;
  }
  .btn-dftr span{
    font-size: 16px;
  }
  .col-text-about {
    padding: 0px 20px;
    margin-top: 20px;
    width: 430px;
  }
  .col-text-about h1 {
    font-size: 25px;
  }
  .about-text {
    font-size: 18px;
    text-align: center;
  }
  ol.winner-criteria {
  padding: 20px 20px;
  text-align: left;
  color: #ffffff;
  list-style-type: decimal !important;
  
}
ol.winner-criteria li {
  width: 100%;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 20px 0px;
}
ol.winner-criteria li > p {
  width: 100%;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 10px 0px;
}
.background-grass {
  background-image: url('../assets/grass.png');
  padding: 80px 10px 40px;
  background-size: cover;
  height: 1450px;
  width: 100%;
  z-index: 10;
  display: block;
  position: relative;
  margin-top: -40px;
}
.dekstop {
  display: none;
}
}
</style>
