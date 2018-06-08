<template>
  <div id="votingcandidate">
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="8" offset-md="2" class="nopadding">
            <div class="columnvote">
                <p>TEXT</p>
            </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'votingcandidate',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
