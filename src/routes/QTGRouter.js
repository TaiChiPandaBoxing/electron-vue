export default [
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/QTG/Test'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/entry',
    name: 'entry',
    component: () => import(/* webpackChunkName: "entry" */ '../views/QTG/Entry'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/QTG/Detail'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/',
    redirect: '/test'
  }
]
