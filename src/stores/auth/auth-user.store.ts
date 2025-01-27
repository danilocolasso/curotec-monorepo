import { ref } from 'vue'
import { defineStore } from 'pinia'
import { handleApiError } from '@/utils/handleApiError.ts'
import { authUserProfileService } from '@/services/auth/auth-user-profile.service.ts'
import type { User } from '@/types/user.ts'

export const useAuthUserStore = defineStore('useAuthUserStore', () => {
  const user = ref<User | null>(null)
  const loading = ref(false)

  const fetchUser = async () => {
    try {
      loading.value = true
      user.value = await authUserProfileService()
    } catch (error) {
      handleApiError(error)
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    fetchUser,
    loading,
  }
})
