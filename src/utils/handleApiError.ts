import axios from 'axios'
import { toast } from 'vue3-toastify'

const UNEXPECTED_ERROR_MESSAGE = 'An unexpected error occurred'

export function handleApiError(error: unknown) {
  if (axios.isAxiosError(error)) {
    toast.error(error.response?.data?.message ?? UNEXPECTED_ERROR_MESSAGE)
  } else {
    toast.error(UNEXPECTED_ERROR_MESSAGE)
  }
}
