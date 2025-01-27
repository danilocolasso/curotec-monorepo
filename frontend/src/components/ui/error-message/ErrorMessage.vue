<script lang="ts" setup>
export interface Props {
  error: string | null
}

const { error } = defineProps<Props>()
</script>

<template>
  <div v-if="error" class="text-xs text-red-500">
    {{ error }}
  </div>
</template>
