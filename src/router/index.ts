import { createRouter, createWebHistory } from 'vue-router'
import { publicRoutes } from '@/router/publicRoutes.ts'
import { privateRoutes } from '@/router/privateRoutes.ts'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...publicRoutes,
    {
      path: '/',
      component: MainLayout,
      children: privateRoutes,
    },
  ],
})

export default router
