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
    component: () => import('@/views/project/ProjectCreateView.vue'),
  },
  {
    path: 'projects/:id',
    name: 'projects.show',
    component: () => import('@/views/project/ProjectShowView.vue'),
  },
  {
    path: 'projects/:id/edit',
    name: 'projects.edit',
    component: () => import('@/views/project/ProjectEditView.vue'),
  }
]
