<script setup lang="ts">
import LayoutSidebar from '@/layouts/LayoutSidebar.vue'
import LayoutHeader from '@/layouts/LayoutHeader.vue'
import LayoutContent from '@/layouts/LayoutContent.vue'
</script>

<template>
  <LayoutSidebar />
  <main class="flex-1 bg-slate-100">
    <LayoutHeader />
    <LayoutContent>
      <router-view />
    </LayoutContent>
  </main>
</template>
