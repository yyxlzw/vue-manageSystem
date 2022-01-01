import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        redirect: '/home/index'
      },
      {
        path: '/home/index',
        name: "index",
        component: () => import('../views/HomeIndex.vue')
      },
      {
        path: '/home/moment',
        name: "moment",
        component: () => import('../views/HomeMoment.vue')
      },
      {
        path: '/home/setuser',
        name: "setuser",
        component: () => import('../views/HomeSetUser.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if (token || to.path === "/login") {
    next()
  } else {
    next("/login")
  }
})

export default router
