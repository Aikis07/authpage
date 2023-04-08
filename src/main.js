import Vue from 'vue'
import App from './App.vue'
import router from './router'
import main from '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  main,
  render: h => h(App)
}).$mount('#app')
