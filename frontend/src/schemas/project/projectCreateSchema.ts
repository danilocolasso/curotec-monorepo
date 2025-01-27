import * as yup from 'yup'

export const projectCreateSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().optional(),
  tags: yup.array(yup.string()).optional(),
})

export type ProjectCreatePayload = yup.InferType<typeof projectCreateSchema>
