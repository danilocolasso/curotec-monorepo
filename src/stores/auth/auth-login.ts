import { ref } from 'vue'
import type { User } from '@/types/user.ts'
import { authLoginService } from '@/services/auth/auth-login.service.ts'
import { defineStore } from 'pinia'
import { useForm } from 'vee-validate'
import { type LoginPayload, loginSchema } from '@/schemas/auth/loginSchema.ts'
import { handleApiError } from '@/utils/handleApiError.ts'
import { useRouter } from 'vue-router'

export const useAuthLoginStore = defineStore('useAuthLoginStore', () => {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const router = useRouter()

  const { defineField, errors, handleSubmit } = useForm<LoginPayload>({
    validationSchema: loginSchema,
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      loading.value = true
      user.value = await authLoginService(data)
      await router.push({ name: 'home' })
    } catch (error) {
      handleApiError(error)
    } finally {
      loading.value = false
    }
  })

  return {
    user,
    loading,
    onSubmit,
    defineField,
    errors,
  }
})
