import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import type { ProjectShowPayload } from '@/services/project/project-show.service.ts'
import { handleApiError } from '@/utils/handleApiError.ts'
import { useForm } from 'vee-validate'
import { projectEditService } from '@/services/project/project-edit.service.ts'
import { toast } from 'vue3-toastify'
import {
  type ProjectUpdatePayload,
  projectUpdateSchema,
} from '@/schemas/project/projectUpdateSchema.ts'

export const useProjectEditStore = defineStore('useProjectEditStore', () => {
  const route = useRoute()
  const router = useRouter()
  const loading = ref(false)

  const { defineField, errors, handleSubmit, resetForm } = useForm<ProjectUpdatePayload>({
    validationSchema: projectUpdateSchema,
  })

  const fetchProject = async () => {
    try {
      loading.value = true
      const payload: ProjectShowPayload = { id: Number(route.params.id) }
      const project = await projectEditService(payload)

      resetForm({
        values: {
          title: project.title,
          description: project.description,
          tags: project.tags,
        },
      })
    } catch (error) {
      handleApiError(error)
    } finally {
      loading.value = false
    }
  }

  const onSubmit = handleSubmit(async (data: ProjectUpdatePayload) => {
    try {
      loading.value = true
      await projectEditService(data)
      await router.push({ name: 'projects' }).then(() => {
        toast.success('Project updated successfully')
      })
      resetForm()
    } catch (error) {
      handleApiError(error)
    } finally {
      loading.value = false
    }
  })

  onMounted(async () => {
    await fetchProject()
  })

  return {
    defineField,
    errors,
    loading,
    onSubmit,
  }
})
