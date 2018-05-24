<template>
    <b-col v-if="entryComp" cols="6" md="4" class="nopadding">
        <div id="entry" class="entry">
        <b-container fluid>
            <router-link :to="{path: '/profile/' + entryComp.url}">
            <b-row>
                <b-col cols="12">
                    <div class="col-desc">
                        <b-img class="img-entry" :src="apiUrl+'../uploads/'+entryComp.url_img+'.jpg'" fluid />
                        <div class="description">
                            <p class="text-bio">{{entryComp.child_name}}, {{entryComp.age}} Tahun</p>
                            <b-img :src="require('../assets/star.png')" fluid/>
                            <p class="point">{{entryComp.point}}</p>
                        </div>
                    </div>
                </b-col>
            </b-row>
            </router-link>
        </b-container>
    </div>
    </b-col>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'entry',
  props: ['id'],
  data () {
    return {
        entryComp: {
            title: null,
            image: null,
            point: null,
            url: null,
            url_img: null
        }
    }
  },
  watch: {
      id: function(val){
          this.fetchData();
      }
  },
  created: function() {
      this.entryComp = this.entry;
  },
  mounted(){
    console.log(this.entry);
    this.fetchData();
  },
  
  methods: {
      fetchData(){
            axios.get(this.apiUrl+'api/participant/'+this.id)
            .then(response =>{
                let participant = response.data.result.participant
                this.$set(this, 'entryComp', participant);
            })
            .catch(e => {

            })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#entry {
    padding: 10px;
}
.img-entry {
    display: block;
    border-radius: 10px 10px 0px 0px;
}
.col-desc {
    background-color: #ffffff;
}
.description {
    background-color: #ffffff;
    padding: 8px;
    border-radius: 0px 0px 10px 10px;
    display: inline-block;
    width: 100%;
}
.description p {
    float: left;
    font-size: 20px;
    margin-bottom: 0px;
}
.description img {
    width: 20px;
    float: right;
}
.description p.point {
    float: right;
    font-size: 20px;
    margin-bottom: 0px;
}
@media screen and (max-width:768px) {
    #entry {
    padding: 10px 0px;
}
.col-desc {
 padding-top: 20px;
 border-radius: 10px 10px 10px 10px;
}
.description p {
    float: left;
    font-size: 16px;
    margin-bottom: 0px;
}
}
</style>
