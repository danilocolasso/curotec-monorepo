<script setup lang="ts">
import { RouterView } from 'vue-router'
import 'vue3-toastify/dist/index.css';
import { useAuthUserStore } from '@/stores/auth/auth-user.store.ts'
useAuthUserStore()
</script>

<template>
  <div class="flex h-screen overflow-auto">
    <RouterView />
  </div>
</template>
