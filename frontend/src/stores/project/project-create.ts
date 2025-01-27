import { defineStore } from 'pinia'
import { useForm } from 'vee-validate'
import {
  type ProjectCreatePayload,
  projectCreateSchema,
} from '@/schemas/project/projectCreateSchema.ts'
import { handleApiError } from '@/utils/handleApiError.ts'
import { projectCreateService } from '@/services/project/project-create.service.ts'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

export const useProjectCreateStore = defineStore('useProjectCreateStore', () => {
  const router = useRouter()
  const loading = ref(false)

  const { defineField, errors, handleSubmit, resetForm } = useForm<ProjectCreatePayload>({
    validationSchema: projectCreateSchema,
  })

  const onSubmit = handleSubmit(async (data: ProjectCreatePayload) => {
    try {
      loading.value = true
      await projectCreateService(data)
      await router.push({ name: 'projects' }).then(() => {
        toast.success('Project created successfully')
      })
      resetForm()
    } catch (error) {
      handleApiError(error)
    } finally {
      loading.value = false
    }
  })

  return {
    defineField,
    errors,
    loading,
    onSubmit,
  }
})
