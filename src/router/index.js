import Vue from 'vue'
import Router from 'vue-router'
// import AppRouter from './app.js'
const Index = () => import('../components/index/index.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/detail'], resolve),
      meta: { title: '主页面' },
      children: [{
        path: '/app',
        component: Index
      }]
    }
  ]
})
