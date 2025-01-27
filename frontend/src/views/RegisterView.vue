<template>
  <div class="flex w-full items-center justify-center bg-slate-100">
    <Card class="flex flex-col gap-4 p-8 w-96">
      <CardHeader class="p-2 text-center font-bold">Register</CardHeader>
      <form id="login-form" class="flex flex-col gap-4" @submit="store.onSubmit">
        <FormField id="name" label="Name" :error="store.errors.name">
          <Input id="name" type="text" placeholder="Name" v-model="name" v-bind="nameProps" />
        </FormField>
        <FormField id="email" label="Email" :error="store.errors.email">
          <Input id="email" type="email" placeholder="Email" v-model="email" v-bind="emailProps" />
        </FormField>
        <FormField id="username" label="Username" :error="store.errors.username">
          <Input
            id="username"
            type="text"
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
        <FormField
          id="password-confirmation"
          label="Password Confirmation"
          :error="store.errors.password_confirmation"
        >
          <Input
            id="passwordConfirmation"
            type="password"
            placeholder="Password Confirmation"
            v-model="passwordConfirmation"
            v-bind="passwordConfirmationProps"
          />
        </FormField>
      </form>
      <router-link :to="{ name: 'login' }">Already have an account?</router-link>
      <Button form="login-form" type="submit" :disabled="store.loading">
        <span v-if="store.loading">Registering...</span>
        <span v-else>Register</span>
      </Button>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuthRegisterStore } from '@/stores/auth/auth-register'
import { FormField } from '@/components/ui/form-field'

const store = useAuthRegisterStore()
const [name, nameProps] = store.defineField('name')
const [email, emailProps] = store.defineField('email')
const [username, usernameProps] = store.defineField('username')
const [password, passwordProps] = store.defineField('password')
const [passwordConfirmation, passwordConfirmationProps] = store.defineField('password_confirmation')
</script>
