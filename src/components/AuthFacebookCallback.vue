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
          var urlAuthHandler = this.apiUrl+'api/login/facebook/callback?code='+code;
          axios.get(urlAuthHandler)
            .then(response => {
              // JSON responses are automatically parsed.
              var loggedUser = response.data.result.user;
              localStorage.setItem('user', JSON.stringify(loggedUser));
              this.$router.push({path: '/home'});
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
