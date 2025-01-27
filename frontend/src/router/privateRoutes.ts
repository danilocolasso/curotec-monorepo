import type { RouteRecordRaw } from 'vue-router'

export const privateRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/home/HomeView.vue'),
  },
  {
    path: 'projects',
    name: 'projects',
    component: () => import('@/views/project/ProjectListView.vue'),
  },
  {
    path: 'projects/create',
    name: 'projects.create',
    component: () => import('@/views/project/ProjectListView.vue'),
  }
]
