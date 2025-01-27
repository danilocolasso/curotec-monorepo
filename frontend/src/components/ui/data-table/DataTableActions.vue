<template>
  <td>
    <div class="-my-1.5">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisHorizontalIcon class="w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            v-for="(action, index) in actions"
            :key="index"
            @click="() => action.onClick(item)"
          >
            <div class="flex gap-2 items-center">
              <component v-if="action.icon" :is="action.icon" />
              {{ action.label }}
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </td>
</template>

<script setup lang="ts">
import { EllipsisHorizontalIcon } from '@heroicons/vue/16/solid'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface DataTableAction<T> {
  label?: string
  icon?: any
  onClick: (item: T) => void
}

interface DataTableActionsProps<T> {
  actions: DataTableAction<T>[]
  item: T
}

const props = defineProps<DataTableActionsProps<any>>()
</script>
