import api from '@/services/api.ts'

export interface ProjectAddContributorPayload {
  id: number
  email: string
}

export interface ProjectAddContributorResponse {
  message: string
}

export const projectAddContributorService = async (
  payload: ProjectAddContributorPayload,
): Promise<ProjectAddContributorResponse> => {
  const response = await api.post(`/projects/${payload.id}/contributor`, payload)
  return response.data
}
