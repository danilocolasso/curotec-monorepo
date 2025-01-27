import * as yup from 'yup'

export const registerSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required().min(6),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

export type registerPayload = yup.InferType<typeof registerSchema>
