import { createRouter, createWebHistory } from 'vue-router'
import { publicRoutes } from '@/router/publicRoutes.ts'
import { privateRoutes } from '@/router/privateRoutes.ts'
import MainLayout from '@/layouts/MainLayout.vue'
import { useAuthUserStore } from '@/stores/auth/auth-user.store.ts'

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

router.beforeEach(async (to, from, next) => {
  const publicRouteNames = publicRoutes.map(route => route.name)

  if (publicRouteNames.includes(to.name)) {
    next()
    return
  }

  const authUserStore = useAuthUserStore()

  if (!authUserStore.loading && !authUserStore.user) {
    await authUserStore.fetchUser()
  }

  if (!authUserStore.user && !publicRouteNames.includes(to.name)) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
