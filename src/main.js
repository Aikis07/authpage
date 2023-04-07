import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import main from '@/assets/css/main.css'

Vue.config.productionTip = false

import VueMq from 'vue-mq'
 
Vue.use(VueMq, {
 breakpoints: {
 sm:  450,
 md:  1250,
 notebooks: 1400,
 lg: Infinity,
  }
})

new Vue({
  router,
  store,
  main,
  render: h => h(App)
}).$mount('#app')
