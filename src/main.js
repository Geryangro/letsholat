// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Meta from 'vue-meta'

import BootstrapVue from 'bootstrap-vue'
import {MediaQueries} from 'vue-media-queries';
import VueCookie from 'vue-cookie';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueGtm from 'vue-gtm'
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import Vuex from 'vuex'

Vue.use(require('@websanova/vue-upload'));
Vue.use(Meta)
Vue.use(VueGtm, {
  debug: true, 
  vueRouter: router,
})
Vue.use(VueCookie);
Vue.use(Vuex)
Raven
  .config('https://f5908700f73b486d947dc216c1573759@sentry.io/1208981')
  .addPlugin(RavenVue, Vue)
  .install();

const mediaQueries = new MediaQueries();
Vue.use(mediaQueries);
Vue.use(VueYouTubeEmbed);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.mixin({
  data: function() {
    return {
      get mainUrl() {
        //return "http://letssholat.com/";
        return "http://dev.letssholat.com/";
        //return "http://localhost:8080/"
      },
      get apiUrl() {
        //return "http://api.letsshalat.local/index.php/";
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
