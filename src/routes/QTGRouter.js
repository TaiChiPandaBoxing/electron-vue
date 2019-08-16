export default [
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/QTG/Test'),
    meta: {
      showBack: true,
      keepAlive: true
    }
  },
  {
    path: '/entry',
    name: 'entry',
    component: () => import(/* webpackChunkName: "entry" */ '../views/QTG/Entry'),
    meta: {
      showBack: true,
      keepAlive: true
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/QTG/Detail'),
    meta: {
      showBack: true,
      keepAlive: true
    }
  },
  {
    path: '/',
    redirect: '/test'
  }
]
