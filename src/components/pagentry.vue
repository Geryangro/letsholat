<template>
  <div id="pag-entry" class="pag-entry">
    <b-container fluid>
      <b-row>
        <b-col cols="12" offset="">
          <b-row>
            <entry v-for="(entry, index) in pages[currentPage-1]" :key="index" :id="entry.url" :entry="entry"/>
          </b-row>
          <b-pagination
              align="center"
              v-model="currentPage"
              :per-page="nbp"
              :number-of-pages="numPages"
              :total-rows="entrys.length"    
            >
            </b-pagination>
        </b-col>
        
      </b-row>
    </b-container>
      
  </div>
</template>

<script>
import entry from '@/components/entry'


export default {
  name: 'pag-entry',
  components: {
    entry
  },
  props: ['entrys'],
  watch: {
    entrys: function(val) {
      this.entries = val;
      this.loadDataEntry();
    },
    currentPage: function(value){
      
    }
  },
  data () {
    return {
      currentPage: 0,
      nbp: 6,
      pages:[],
      pageGen: 0,
      numPages: 0,
      entries: []
    }
  },
  created: function(){
    this.loadDataEntry();
  },
  methods: {
    loadDataEntry: function() {
      this.pages =  this.loadDataToPages(this.entries, this.nbp);
      this.numPages = this.pages.length-1;
    },
    loadDataToPages: function(data, elementPerPage){
        var pages = [];
        var i,j,temparray,chunk = elementPerPage;
        for (i=0,j=data.length; i<j; i+=chunk) {
            temparray = data.slice(i,i+chunk);
            pages.push(temparray);
        }
        return pages;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pag-entry {
  width: 100%;
  padding: 40px 0px;
}
</style>
