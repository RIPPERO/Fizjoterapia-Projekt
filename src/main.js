import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCxzafyeE2DQ1dNbvILbXB9xRFxqIo9l9Q'
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
