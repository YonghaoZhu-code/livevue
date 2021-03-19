import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../components/home.vue')
  },
  {
    path: '/login',
    component: () => import('../components/Login.vue')
  }
]
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/home') {
    const tok = window.sessionStorage.getItem('token')
    if (!tok) return next('/login')
  }
  next()
})
export default router
