import Vue from 'vue'
import Router from 'vue-router'
import IOSRoutes from './IOSRouter'
import QTGRoutes from './QTGRouter'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ios'
    },
    {
      path: '/ios',
      component: () => import(/* webpackChunkName: "IOS" */ '../views/IOS/Layout'),
      children: IOSRoutes
    },
    {
      path: '/qtg',
      component: () => import(/* webpackChunkName: "QTG" */ '../views/QTG/Layout'),
      children: QTGRoutes
    }
  ]
})
