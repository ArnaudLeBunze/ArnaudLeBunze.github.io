import HomeView from '@/views/HomeView.vue'
import RiskView from '@/views/RiskView.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/risk',
    name: 'Risk territory counter',
    component: RiskView,
  },
]

export default routes
