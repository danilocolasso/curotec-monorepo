<template>
  <TableHeader>
    <TableRow>
      <TableHead
        v-for="column in columns"
        :key="column.key"
        :class="column.sortable ? 'cursor-default hover:bg-gray-500/5' : ''"
        @click="column.sortable ? () => onSort(column.key) : null"
      >
        {{ column.label }}
        <span v-if="sort === column.key" class="ml-1">
          {{ order === 'asc' ? '↑' : '↓' }}
        </span>
      </TableHead>
      <TableHead v-if="actions" class="relative w-0">
        <span class="sr-only">Actions</span>
      </TableHead>
    </TableRow>
  </TableHeader>
</template>

<script setup lang="ts">
import { TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface DataTableColumn<T> {
  key: keyof T
  label: string
  sortable?: boolean
  value?: (row: T) => string | any
}

interface DataTableAction<T> {
  label?: string
  icon?: any
  onClick: (item: T) => void
}

interface DataTableHeadProps<T> {
  columns: DataTableColumn<T>[]
  sort?: keyof T
  order?: 'asc' | 'desc'
  actions?: DataTableAction<T>[]
  onSort: (key: keyof T) => void
}

const props = defineProps<DataTableHeadProps<any>>()
</script>
