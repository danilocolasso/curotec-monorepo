import type { Project } from '@/types/project.ts'
import api from '@/services/api.ts'

export interface ProjectShowPayload {
  id: number
}

export type ProjectShowResponse = Project

export const projectShowService = async (
  payload: ProjectShowPayload,
): Promise<ProjectShowResponse> => {
  const response = await api.get(`/projects/${payload.id}`)
  return response.data
}
