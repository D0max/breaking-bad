import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/seasons/:id',
    name: 'Seasons',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Episodes.vue')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('../views/Characters')
  },
  {
    path: '/characters/:id',
    name: 'CharactersById',
    component: () => import('../views/CharactersById')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
