const Ind = () => import('../App.vue')
const App = () => import('../components/index/index.vue')
const routers = [{
  path: '/app',
  //component: Ind,
  meta: { title: '服务列表' },
  children: [
    {
      path: '/',
      component: App,
      meta: { title: '菜单首页' }
    }
  ]
}]
export default routers
