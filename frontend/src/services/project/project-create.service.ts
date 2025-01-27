import type { Project } from '@/types/project.ts'
import type { ProjectCreatePayload } from '@/schemas/project/projectCreateSchema.ts'
import api from '@/services/api.ts'

export type ProjectCreateResponse = Project

export const projectCreateService = async (
  payload: ProjectCreatePayload,
): Promise<ProjectCreateResponse> => {
  const response = await api.post('/projects', payload)
  return response.data
}
