import TabPanel from './TabPanel.vue'
import Tabs from './Tabs.vue'

export default {
  install (Vue) {
    Vue.component('TabPanel', TabPanel)
    Vue.component('Tabs', Tabs)
  }
}
