<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { ArrowRightStartOnRectangleIcon, Bars3Icon } from '@heroicons/vue/16/solid'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useSidebar } from '@/composables/useSidebar.ts'

const { toggleSidebar } = useSidebar()
</script>

<template>
  <header class="flex justify-between p-4">
    <Button @click="toggleSidebar">
      <Bars3Icon />
    </Button>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar class="bg-slate-400">
          <AvatarFallback>DC</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <!-- TO DO: Logout-->
          <router-link :to="{ name: 'login' }" class="flex gap-2 items-center">
            <ArrowRightStartOnRectangleIcon class="w-5" />
            <span>Logout</span>
          </router-link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
</template>
