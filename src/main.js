import Vue from 'vue'
import socket from './api'
import App from './App.vue'
import store from './store'
import router from './routes'
import IconSvg from './icons'
import VModal from 'vue-js-modal'
import localforage from './db/localforage'
import VueTouchKeyboard from 'vue-touch-keyboard'
import 'vue-touch-keyboard/dist/vue-touch-keyboard.css' // load default style

Vue.use(IconSvg).use(VueTouchKeyboard).use(VModal, { dialog: true })

Vue.prototype.$socket = socket
Vue.prototype.$localforage = localforage

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
