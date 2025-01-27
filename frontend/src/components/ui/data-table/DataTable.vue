<template>
  <div class="flex flex-1 flex-col justify-between gap-4">
    <Table>
      <DataTableHead
        :columns="columns"
        :actions="actions"
        :sort="sort"
        :order="order"
        @sort="handleSort"
      />
      <DataTableBody :data="data" :columns="columns" :actions="actions" />
      <DataTableLoading v-if="loading" />
    </Table>
    <DataTablePagination
      v-if="pagination"
      :currentPage="currentPage"
      :lastPage="lastPage"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import DataTableHead from '@/components/ui/data-table/DataTableHead.vue'
import DataTableBody from '@/components/ui/data-table/DataTableBody.vue'
import DataTableLoading from '@/components/ui/data-table/DataTableLoading.vue'
import DataTablePagination from '@/components/ui/data-table/DataTablePagination.vue'
import { toast } from 'vue3-toastify'
import { Table } from '@/components/ui/table'

interface PaginatedPayload<T> {
  current_page: number
  per_page: number
  sort?: string
  order?: 'asc' | 'desc'

  [key: string]: any
}

interface PaginatedResponse<T> {
  data: T[]
  meta: {
    per_page: number
    current_page: number
    last_page: number
  }
}

export interface DataTableColumn<T> {
  key: keyof T
  label: string
  sortable?: boolean
  value?: (row: T) => string | any
}

export interface DataTableAction<T> {
  label?: string
  icon?: any
  onClick: (item: T) => void
}

interface DataTableProps<T> {
  service: (params: PaginatedPayload<any>) => Promise<PaginatedResponse<T>>
  columns: DataTableColumn<T>[]
  actions?: DataTableAction<T>[]
  filters?: Record<string, any>
  sort?: keyof T
  order?: 'asc' | 'desc'
  pagination?: boolean
  striped?: boolean
}

const props = withDefaults(defineProps<DataTableProps<any>>(), {
  pagination: true,
})

const data = ref<any[]>([])
const loading = ref(false)
const perPage = ref(10)
const currentPage = ref(1)
const lastPage = ref(1)
const sort = ref(props.sort)
const order = ref(props.order)

const fetchData = async () => {
  loading.value = true
  try {
    const response = await props.service({
      current_page: currentPage.value,
      per_page: perPage.value,
      sort: sort.value ? String(sort.value) : undefined,
      order: order.value,
      ...props.filters,
    })
    data.value = response.data
    perPage.value = response.meta.per_page
    currentPage.value = response.meta.current_page
    lastPage.value = response.meta.last_page
  } catch {
    toast.error('Error fetching data. Please try again later.')
  } finally {
    loading.value = false
  }
}

const handleSort = (key: keyof any) => {
  if (sort.value === key) {
    order.value = order.value === 'asc' ? 'desc' : 'asc'
  } else {
    sort.value = key
    order.value = 'asc'
  }
}

const handlePageChange = (page: number) => {
  currentPage.value = page
}

watch([currentPage, sort, order, () => props.filters], fetchData)

onMounted(fetchData)
</script>
