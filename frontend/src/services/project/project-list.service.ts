import type { PaginatedResponse } from '@/types/paginated-response.ts'
import type { PaginatedPayload } from '@/types/paginated-payload.ts'
import type { Project } from '@/types/project.ts'
import api from '@/services/api.ts'

export type ProjectListPayload = PaginatedPayload
export type ProjectListServiceResponse = PaginatedResponse<Project>

export const projectListService = async (
  payload: ProjectListPayload,
): Promise<ProjectListServiceResponse> => {
  const response = await api.get('/projects', { params: payload })
  return response.data
}
