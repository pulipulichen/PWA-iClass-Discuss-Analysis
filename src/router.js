import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    component: Index 
  }
]

const router = new VueRouter({
  // mode: "history",
  mode: "hash",
  routes, // `routes: routes` 的缩写
})

export default router