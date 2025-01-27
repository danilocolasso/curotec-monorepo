<template>
  <TableBody>
    <TableRow v-for="(row, index) in data" :key="index">
      <TableCell v-for="column in columns" :key="column.key">
        <span v-if="typeof column.value === 'string'">
          {{typeof column.value}}
          {{ column.value(row) }}
        </span>
        <span v-else-if="column.value" class="flex gap-1">
          <Badge v-for="item in column.value(row)" :key="item">
            {{ item }}
          </Badge>
        </span>
        <span v-else>{{ row[column.key] }}</span>
      </TableCell>
      <TableCell v-if="actions">
        <DataTableActions :actions="actions" :item="row" />
      </TableCell>
    </TableRow>
  </TableBody>
</template>

<script setup lang="ts">
import DataTableActions from '@/components/ui/data-table/DataTableActions.vue'
import { TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

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

interface DataTableBodyProps<T> {
  data: T[]
  columns: DataTableColumn<T>[]
  actions?: DataTableAction<T>[]
}

const props = defineProps<DataTableBodyProps<any>>()
</script>
