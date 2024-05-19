import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NumbersView from '@/views/NumbersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/numbers',
    name: 'numbers',
    component: NumbersView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
