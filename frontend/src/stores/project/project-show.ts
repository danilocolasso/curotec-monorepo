import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Project } from '@/types/project.ts'
import { useRoute } from 'vue-router'
import {
  type ProjectShowPayload,
  projectShowService
} from '@/services/project/project-show.service.ts'
import { handleApiError } from '@/utils/handleApiError.ts'

export const useProjectShowStore = defineStore('useProjectShowStore', () => {
  const route = useRoute()
  const project = ref<Project | null>(null)
  const loading = ref(false)

  const fetchProject = async () => {
    try {
      loading.value = true
      const payload: ProjectShowPayload = { id: Number(route.params.id) }
      project.value = await projectShowService(payload)
    } catch(error) {
      handleApiError(error)
    }
  }

  fetchProject()

  return {
    project,
    loading,
  }
})
