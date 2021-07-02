import Vue from 'vue'
import Home from './Home.vue'
import vuetify from '../../plugins/vuetify'
import {firestorePlugin} from 'vuefire'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios, firestorePlugin)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Home)
}).$mount('#app')
