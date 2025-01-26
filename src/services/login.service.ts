import api, { getCsrfToken } from '@/services/api'
import type { User } from '@/types/user.ts'
import type { LoginPayload } from '@/schemas/auth/loginSchema.ts'

export type LoginResponse = User

export const loginService = async (data: LoginPayload): Promise<LoginResponse> => {
  await getCsrfToken()
  const response = await api.post(
    import.meta.env.VITE_API_URL + '/login',
    data,
  )
  return response.data
}
