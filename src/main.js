// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import {MediaQueries} from 'vue-media-queries';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueYouTubeEmbed from 'vue-youtube-embed'

const mediaQueries = new MediaQueries();
 
Vue.use(mediaQueries);
Vue.use(VueYouTubeEmbed);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.mixin({
  data: function() {
    return {
      get mainUrl() {
        return "http://letssholat.com/";
      },
      get apiUrl() {
        return "http://endpoint.letssholat.bazarafra.com/index.php/";
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  created: function (){
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v3.0';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  router,
  components: { App },
  template: '<App/>',
  mediaQueries: mediaQueries
})
