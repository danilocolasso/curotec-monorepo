<script lang="ts" setup>
import { Label } from '@/components/ui/label'
import { ErrorMessage } from '@/components/ui/error-message'

export interface Props {
  id: string
  label?: string
  error?: string
}

const { id, label, error } = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label v-if="label" :for="id">{{ label }}</Label>
    <slot :id="id"></slot>
    <ErrorMessage v-if="error" :error="error" />
  </div>
</template>
