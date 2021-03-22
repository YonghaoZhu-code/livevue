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
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  }
]
const router = new VueRouter({
  routes
})
// 请求拦截
// router.beforeEach((to, from, next) => {
//   if (to.path === '/home') {
//     const tok = window.sessionStorage.getItem('token')
//     if (!tok) return next('/login')
//   }
//   next()
// })
export default router
