import IconSvg from './index.vue'

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./', false, /\.svg$/)
requireAll(req)

export default (Vue) => {
  Vue.component(IconSvg.name, IconSvg)
}
