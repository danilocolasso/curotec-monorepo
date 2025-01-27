<script setup lang="ts">
import { type FunctionalComponent } from 'vue'
import { useSidebar } from '@/composables/useSidebar.ts'
import { Button } from '@/components/ui/button'
import { CodeBracketIcon, UsersIcon, HomeIcon, XMarkIcon } from '@heroicons/vue/16/solid'

const { isCollapsed, closeSidebar } = useSidebar()

interface Item {
  title: string
  icon: FunctionalComponent
  link: string
}

const items: Item[] = [
  {
    title: 'Projects',
    icon: HomeIcon,
    link: 'home',
  },
  {
    title: 'Users',
    icon: UsersIcon,
    link: 'home',
  },
]
</script>

<template>
  <aside
    :class="[
      'bg-gray-800 text-white',
      isCollapsed ? '-translate-x-full md:-translate-x-0 w-16' : '-translate-x-0 w-64',
    ]"
    class="fixed md:static min-h-svh transition-all duration-300 overflow-hidden"
  >
    <div class="flex justify-between p-4">
      <router-link :to="{ name: 'home' }" class="flex gap-2 items-center font-bold">
        <CodeBracketIcon class="w-5" />
        <span v-if="!isCollapsed">Curotec</span>
      </router-link>
      <Button class="md:hidden self-end" @click="closeSidebar">
        <XMarkIcon />
      </Button>
    </div>
    <ul class="flex flex-col">
      <li class="flex w-full" v-for="item in items" :key="item.link">
        <router-link
          :to="{ name: item.link }"
          class="flex gap-2 items-center hover:bg-black/20 w-full px-4 py-2"
          :title="item.title"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span class="ml-2" v-if="!isCollapsed">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>
