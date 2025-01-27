import type { Tag } from '@/types/tag.ts'
import type { User } from '@/types/user.ts'

export interface Project {
  id: number
  user: User
  title: string
  description?: string
  tags: Tag[]
  contributors?: User[]
  created_at: string
  updated_at: string
}
