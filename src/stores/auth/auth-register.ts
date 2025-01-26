import { defineStore } from 'pinia'
import { type registerPayload, registerSchema } from '@/schemas/auth/registerShcema.ts'
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { authRegisterService } from '@/services/auth/auth-register.service.ts'
import { useRouter } from 'vue-router'
import { handleApiError } from '@/utils/handleApiError.ts'
import type { User } from '@/types/user.ts'
import { toast } from 'vue3-toastify'

export const useAuthRegisterStore = defineStore('useAuthRegisterStore', () => {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const router = useRouter()

  const { defineField, errors, handleSubmit } = useForm<registerPayload>({
    validationSchema: registerSchema,
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      loading.value = true
      user.value = await authRegisterService(data)
      toast.success('User registered successfully')
      await router.push({ name: 'login' })
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
