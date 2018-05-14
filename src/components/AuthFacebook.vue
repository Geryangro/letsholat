<template>
  <div id="login" class="login">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AuthFacebook',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    this.auth();
  },
  methods: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
