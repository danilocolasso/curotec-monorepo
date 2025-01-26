<template>
  <div v-if="error" class="text-xs text-red-500">
    {{ error }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  error: {
    type: String,
    required: false,
    default: null,
  },
})
</script>
