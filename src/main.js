import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'
import IconSvg from './icons'
import { indexDB } from './db'

Vue.use(IconSvg)

Vue.prototype.$indexDB = indexDB

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
