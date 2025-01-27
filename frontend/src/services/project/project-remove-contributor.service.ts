import api from '@/services/api.ts'

export interface ProjectRemoveContributorPayload {
  id: number
  user_id: number
}

export interface ProjectRemoveContributorResponse {
  message: string
}

export const projectRemoveContributorService = async (
  payload: ProjectRemoveContributorPayload,
): Promise<ProjectRemoveContributorResponse> => {
  const response = await api.delete(`/projects/${payload.id}/contributor/${payload.user_id}`)
  return response.data
}
