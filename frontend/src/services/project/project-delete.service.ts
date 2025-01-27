import api from '@/services/api.ts'

export interface ProjectDeletePayload {
  id: number
}

export interface ProjectDeleteResponse {
  message: string
}

export const projectDeleteService = async (
  payload: ProjectDeletePayload,
): Promise<ProjectDeleteResponse> => {
  const response = await api.delete(`/projects/${payload.id}`)
  return response.data
}
