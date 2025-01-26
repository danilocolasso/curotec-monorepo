import type { User } from '@/types/user.ts'
import api from '@/services/api.ts'

export type UserCurrentResponse = User

export const userCurrentService = async (): Promise<UserCurrentResponse> => {
  const response = await api.get('/user')
  return response.data
}
