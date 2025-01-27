<template>
  <ul class="flex gap-2 justify-center">
    <li v-if="lastPage > 6" class="hidden md:block">
      <Button :disabled="currentPage === 1" @click="onPageChange(1)"> First</Button>
    </li>

    <li>
      <Button :disabled="currentPage === 1" @click="onPageChange(Math.max(1, currentPage - 1))">
        Previous
      </Button>
    </li>

    <ul class="flex gap-2">
      <template v-if="lastPage <= 6">
        <li v-for="page in pages" :key="page">
          <Button :disabled="page === currentPage" @click="onPageChange(page)">
            {{ page }}
          </Button>
        </li>
      </template>

      <template v-else>
        <li v-for="page in leftPages" :key="page">
          <Button :disabled="page === currentPage" @click="onPageChange(page)">
            {{ page }}
          </Button>
        </li>
        <li v-if="currentPage < lastPage - 3">
          <Button disabled>
            <EllipsisHorizontalIcon class="w-5" />
          </Button>
        </li>
        <li v-for="page in rightPages" :key="page">
          <Button :disabled="page === currentPage" @click="onPageChange(page)">
            {{ page }}
          </Button>
        </li>
      </template>
    </ul>

    <li>
      <Button
        :disabled="currentPage === lastPage"
        @click="onPageChange(Math.min(lastPage, currentPage + 1))"
      >
        Next
      </Button>
    </li>

    <li v-if="lastPage > 6" class="hidden md:block">
      <Button :disabled="currentPage === lastPage" @click="onPageChange(lastPage)"> Last </Button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Button } from '@/components/ui/button'
import { EllipsisHorizontalIcon } from '@heroicons/vue/16/solid'

interface DataTablePaginationProps {
  currentPage: number
  lastPage: number
  onPageChange: (page: number) => void
}

const props = defineProps<DataTablePaginationProps>()

const pages = computed(() => Array.from({ length: props.lastPage }, (_, i) => i + 1))

const rightPages = computed(() => [props.lastPage - 2, props.lastPage - 1, props.lastPage])

const leftPages = computed(() => {
  if (props.currentPage > props.lastPage - 3) {
    const stableStart = Math.max(1, rightPages.value[0] - 3)
    return [stableStart, stableStart + 1, stableStart + 2]
  } else {
    const startPage = Math.max(1, props.currentPage - 2)
    const length = Math.max(3, props.currentPage - startPage + 1)
    return Array.from({ length }, (_, i) => startPage + i)
  }
})
</script>
