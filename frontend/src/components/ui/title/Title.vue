<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  separator?: boolean
}

const { title, subtitle, separator } = withDefaults(defineProps<Props>(), {
  separator: true,
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="flex gap-2 items-center text-2xl">
      <span class="font-bold">{{ title }}</span>
      <span class="text-xs" v-if="subtitle">-</span>
      <span class="text-sm text-slate-400" v-if="subtitle">{{ subtitle }}</span>
    </h1>
    <hr v-if="separator" />
  </div>
</template>
