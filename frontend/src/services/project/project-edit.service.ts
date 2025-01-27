import type { Project } from '@/types/project.ts'
import api from '@/services/api.ts'

export interface ProjectEditPayload {
  id: number
}

export type ProjectEditResponse = Project

export const projectEditService = async (
  payload: ProjectEditPayload,
): Promise<ProjectEditResponse> => {
  const response = await api.put(`/projects/${payload.id}`, payload)
  return response.data
}
