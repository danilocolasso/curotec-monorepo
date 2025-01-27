<script setup lang="ts">
import { useProjectShowStore } from '@/stores/project/project-show.ts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const store = useProjectShowStore()
</script>

<template>
  <div class="flex flex-col h-full justify-between">
    <div class="flex flex-col gap-4">
      <div class="flex gap-2">
        <span class="font-bold">Title:</span>
        <span>{{ store.project?.title }}</span>
      </div>
      <div class="flex gap-2">
        <span class="font-bold">Description:</span>
        <p>{{ store.project?.title }}</p>
      </div>
      <div class="flex gap-2">
        <span class="font-bold">tags:</span>
        <Badge v-for="tag in store.project?.tags" :key="tag.id" :tag="tag">
          {{ tag }}
        </Badge>
      </div>
      <div class="flex gap-2">
        <span class="font-bold">Contributors:</span>
        <Badge
          variant="outline"
          v-for="contributor in store.project?.contributors"
          :key="contributor.id"
          :title="contributor.email"
        >
          {{ contributor.name }}
        </Badge>
      </div>
    </div>
    <router-link :to="{ name: 'projects' }">
      <Button>Back</Button>
    </router-link>
  </div>
</template>
