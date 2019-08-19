import Vue from 'vue'
import socket from './api'
import App from './App.vue'
import store from './store'
import router from './routes'
import IconSvg from './icons'
import { indexDB } from './db'
import VueTouchKeyboard from 'vue-touch-keyboard'
import 'vue-touch-keyboard/dist/vue-touch-keyboard.css' // load default style

Vue.use(IconSvg).use(VueTouchKeyboard)

Vue.prototype.$socket = socket
Vue.prototype.$indexDB = indexDB

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
