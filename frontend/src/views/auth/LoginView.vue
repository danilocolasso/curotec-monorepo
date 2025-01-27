<template>
  <div class="flex w-full items-center justify-center bg-slate-100">
    <Card class="flex flex-col gap-4 p-8 w-96">
      <CardHeader class="p-2 text-center font-bold">Login</CardHeader>
      <form id="login-form" class="flex flex-col gap-4" @submit="store.login">
        <FormField id="username" label="Username" :error="store.errors.username">
          <Input
            id="username"
            placeholder="Username"
            v-model="username"
            v-bind="usernameProps"
          />
        </FormField>
        <FormField id="password" label="Password" :error="store.errors.password">
          <Input
            id="password"
            type="password"
            placeholder="Password"
            v-model="password"
            v-bind="passwordProps"
          />
        </FormField>
      </form>
      <router-link :to="{ name: 'register' }">Sign up</router-link>
      <Button form="login-form" type="submit" :disabled="store.loading">
        <span v-if="store.loading">Logging in...</span>
        <span v-else>Login</span>
      </Button>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { Card, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuthLoginStore } from '@/stores/auth/auth-login.ts'
import { FormField } from '@/components/ui/form-field'

const store = useAuthLoginStore()
const [username, usernameProps] = store.defineField('username')
const [password, passwordProps] = store.defineField('password')
</script>
