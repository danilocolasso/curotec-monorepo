import api from '@/services/api.ts'

export const authLogoutService = async () => {
  const response = await api.post('/logout')
  return response.data
}
