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
    component: () => import('../views/Home.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    // 权限页面拦截，true为需要权限
    meta: {
      auth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/mine',
    name: 'mine',
    redirect: '/mine/userinfo',
    component: () => import('../views/user/Mine.vue'),
    children: [
      {
        path: '/mine/userinfo',
        component: () => import('../views/user/children/userinfo.vue')
      },
      {
        path: '/mine/tolive',
        component: () => import('../views/user/children/tolive.vue')
      },
      {
        path: '/mine/toapply',
        component: () => import('../views/user/children/toapply.vue')
      },
      {
        path: '/mine/toend',
        component: () => import('../views/user/children/toend.vue')
      }
    ],
    // 权限页面拦截，true为需要权限
    meta: {
      auth: false
    }
  },
  {
    path: '/sellerlist',
    component: () => import('../components/sellerList.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/onlive/:uid',
    component: () => import('../views/onlive/onlive.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/classification',
    component: () => import('../views/Classification.vue')
  },
  {
    path: '/isliveing',
    component: () => import('../views/islive.vue')
  }

]
const router = new VueRouter({
  routes
})
// 请求拦截
// router.beforeEach((to, from, next) => {
//   if (to.meta.auth) {
//     const token = window.sessionStorage.getItem('token')
//     if (!token) return next('/login')
//     return next()
//   }
//   next()
// })
export default router
