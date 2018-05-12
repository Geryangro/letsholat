<template>
  <div id="copyright">
    <b-container fluid>
      <b-row>
        <b-col cols="12">
            <p>© 2014 - 2018 PT. Afra Insan Amanah. All Right Reserved.</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'copyright',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#copyright {
    padding: 10px;
    background-color: #535724;
    width: 100%;
    color: #ffffff;
}
p {
    width: 100%;
    margin:0px auto;
    font-size: 14px;
}
</style>
