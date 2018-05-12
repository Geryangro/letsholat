<template>
  <div id="bootfoot">
    <b-container fluid>
      <b-row>
        <b-col cols="6">
            <div class="about-text">
                <h4>ABOUT #LET'SSHOLATBERSAMAAYAH</h4>
                <hr class="line-white">
                <p>#LetsSholatBersamaAyah adalah sebuah ajakan untuk <br> 
                    bersama-sama mendidik anak agar mencintai sholat. <br>
                    Keteladanan dari ayah untuk mencontohkan sholat yang baik <br>
                    dan juga mengajak anak sholat adalah bagian <br>
                    penting untuk membuat anak mencintai sholat ini.
                </p>
            </div>
        </b-col>
        <b-col cols="6">
            <div class="about-text">
                <h4>CONTACT</h4>
                <hr class="line-white">
                <P>Letssholat.com</P>
                <p>Jl.Raya Pasir Putih RT/RW : 005/001 NO.90 <br>
                Pasir Putih, Depok, Jawa Barat, Indonesia <br>
                Telepon : 021-22779330
                </p>
                <b-img class="medsos" :src="require('../assets/iconfb.png')" fluid/>
                <b-img class="medsos" :src="require('../assets/iconfb.png')" fluid/>
            </div>
        </b-col>
        
      </b-row>
    </b-container>
  </div>
</template>

<script>


export default {
  name: 'bootfoot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bootfoot {
    background-color: #838D37;
    padding: 20px;
    background-size: cover;
    width: 100%;
    margin-top: -25px;
}
.about-text {
    color: #ffffff;
    padding: 60px 70px;
    text-align: left;
}
hr.line-white {
    border-top: 4px solid #ffffff;
    width: 10%;
    margin: 20px auto 50px 0px;
}
.medsos {
    margin: 10px 10px;
}
.copyright {
    padding: 10px;
    background-color: #535724;
    width: 100%;
    color: #ffffff;
}
.background-white {
  min-height: 100%;  
  min-height: 100vh; 
  display: flex;
  align-items: center;
}
.middle {
  background-color: #ffffff;
  padding: 20px 30px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}
.middle P {
  font-size: 20px;
}
.btn-fb {
  margin-top: 20px;
  background-color: #495B95;
  border-radius: 6px;
  border: none;
  padding: 10px 30px;
}
.btn-fb:hover {
  box-shadow: 0px 0px 2px 3px #ffffff;
  background-color: #495B95;
  border-radius: 6px;
  border: none;
}
.btn-fb:focus {
  box-shadow: 0px 0px 2px 3px #ffffff;
  background-color: #495B95;
  border-radius: 6px;
  border: none;
}
span.title-btn {
  margin-left: 5px;
}  
</style>
