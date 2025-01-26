import api from '@/services/api.ts'

export const logoutService = async () => {
  const response = await api.post('/logout')
  return response.data
}
