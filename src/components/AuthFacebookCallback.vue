<template>
  <div id="login" class="login">
  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'AuthFacebookCallback',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      auth: function(){
          var code = this.$route.query.code;
          var urlAuthHandler = 'http://localhost:8000/api/login/facebook/callback?code='+code;
          console.log(urlAuthHandler);
          axios.get(urlAuthHandler)
            .then(response => {
              // JSON responses are automatically parsed.
              console.log(response)
              this.posts = response.data
            })
            .catch(e => {
                console.log(e);
              this.errors.push(e)
         })
      }
  },
  created(){
    this.auth();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
