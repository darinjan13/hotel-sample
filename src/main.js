import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import animate from 'animate.css'

Vue.config.productionTip = false

export const EventBus = new Vue();

new Vue({
  vuetify,
  animate,
  render: h => h(App)
}).$mount('#app')
