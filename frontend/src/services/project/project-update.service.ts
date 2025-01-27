import type { Project } from '@/types/project.ts'
import type { ProjectUpdatePayload } from '@/schemas/project/projectUpdateSchema.ts'
import api from '@/services/api.ts'

export type ProjectUpdateResponse = Project

export const projectUpdateService = async (
  payload: ProjectUpdatePayload,
): Promise<ProjectUpdateResponse> => {
  const response = await api.put(`/projects/${payload.id}`, payload)
  return response.data
}
