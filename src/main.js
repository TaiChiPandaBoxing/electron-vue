import Vue from 'vue'
import i18n from './lang'
import socket from './api'
import App from './App.vue'
import store from './store'
import router from './routes'
import IconSvg from './icons'
import VModal from 'vue-js-modal'
import Tabs from './components/Tabs'
import VSelect from './components/Select'
import localforage from './db/localforage'
import VueTouchKeyboard from 'vue-touch-keyboard'
import 'vue-touch-keyboard/dist/vue-touch-keyboard.css' // load default style

Vue.use(IconSvg).use(VueTouchKeyboard).use(Tabs).use(VSelect).use(VModal, { dialog: true })

Vue.prototype.$socket = socket
Vue.prototype.$localforage = localforage

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
