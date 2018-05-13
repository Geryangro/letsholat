<template>
    <b-col cols="4">
        <div id="profile" class="profile">
        <b-container fluid>
            <b-row>
                <b-col cols="12">
                    <div class="col-desc">
                        <b-img class="img-entry" :src="entryComp.image" fluid />
                        <div class="description">
                            <p>{{entryComp.title}}</p>
                            <b-img :src="require('../assets/star.png')" fluid/>
                            <p class="point">{{entryComp.point}}</p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
    </b-col>
  
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
        entryComp: {
            title: null,
            image: null,
            point: null
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#profile {
    padding: 10px;
}
.img-entry {
    display: block;
    border-radius: 10px 10px 0px 0px;
}
.col-desc {

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
</style>
