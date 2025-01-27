<script setup lang="ts">
import { DataTable } from '@/components/ui/data-table'
import { projectListService } from '@/services/project/project-list.service.ts'
import { useProjectListStore } from '@/stores/project/project-list.ts'
import { Title } from '@/components/ui/title'
import { Button } from '@/components/ui/button'

const store = useProjectListStore()
</script>

<template>
  <div class="flex flex-col w-full gap-8">
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 justify-between">
        <Title title="Project" subtitle="List of projects" :separator="false" />
        <router-link :to="{name: 'projects.create'}">
          <Button>New</Button>
        </router-link>
      </div>
      <hr />
    </div>
    <DataTable :service="projectListService" :columns="store.columns" :actions="store.actions" />
  </div>
</template>
