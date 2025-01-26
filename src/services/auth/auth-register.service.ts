import type { registerPayload } from '@/schemas/auth/registerShcema.ts'
import api, { getCsrfToken } from '@/services/api.ts'

export const authRegisterService = async (payload: registerPayload) => {
  await getCsrfToken()
  const response = await api.post('/register', payload)
  return response.data
}
