export default [
  {
    path: '/aircraft',
    name: 'aircraft',
    component: () => import(/* webpackChunkName: "aircraft" */ '../views/IOS/Position'),
    meta: {
      icon: 'air-freight-fill',
      iconActive: 'air-freight-line',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/position',
    name: 'position',
    component: () => import(/* webpackChunkName: "position" */ '../views/IOS/Position'),
    meta: {
      icon: 'air-route-fill',
      iconActive: 'air-route-line',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/environment',
    name: 'environment',
    component: () => import(/* webpackChunkName: "environment" */ '../views/IOS/Position'),
    meta: {
      icon: 'air-cloud-fill',
      iconActive: 'air-cloud-line',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/comms',
    name: 'comms',
    component: () => import(/* webpackChunkName: "comms" */ '../views/IOS/Control'),
    meta: {
      icon: 'air-antenna-fill',
      iconActive: 'air-antenna-line',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/failure',
    name: 'failure',
    component: () => import(/* webpackChunkName: "failure" */ '../views/IOS/Failure'),
    meta: {
      icon: 'air-warning-fill',
      iconActive: 'air-warning-line',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "map" */ '../views/IOS/Failure'),
    meta: {
      icon: 'air-journey-fill',
      iconActive: 'air-journey-line',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/freeze-reset',
    name: 'freeze-reset',
    component: () => import(/* webpackChunkName: "freeze-reset" */ '../views/IOS/Control'),
    meta: {
      icon: 'air-reset-fill',
      iconActive: 'air-reset-line',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/control',
    name: 'control',
    component: () => import(/* webpackChunkName: "sim-control" */ '../views/IOS/Control'),
    meta: {
      icon: 'air-adjust-fill',
      iconActive: 'air-adjust-line',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/',
    redirect: '/control'
  }
]
