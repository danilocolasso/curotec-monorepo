import api, { getCsrfToken } from '@/services/api.ts'
import type { User } from '@/types/user.ts'
import type { LoginPayload } from '@/schemas/auth/loginSchema.ts'

export type LoginResponse = User

export const authLoginService = async (data: LoginPayload): Promise<LoginResponse> => {
  await getCsrfToken()
  const response = await api.post('/login', data)
  return response.data
}
