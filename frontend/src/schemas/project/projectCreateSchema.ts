import * as yup from 'yup'

export const projectCreateSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().optional(),
  tags: yup.array(yup.string()).optional(),
})

export type ProjectCreatePayload = yup.InferType<typeof projectCreateSchema>
