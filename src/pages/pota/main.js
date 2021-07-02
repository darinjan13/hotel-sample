import Vue from 'vue'
import Pota from './Pota.vue'
import vuetify from '../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Pota)
}).$mount('#app')
