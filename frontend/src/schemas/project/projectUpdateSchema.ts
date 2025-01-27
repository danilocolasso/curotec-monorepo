import * as yup from 'yup'

export const projectUpdateSchema = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  description: yup.string().optional(),
  tags: yup.array(yup.string()).optional(),
})

export type ProjectUpdatePayload = yup.InferType<typeof projectUpdateSchema>
