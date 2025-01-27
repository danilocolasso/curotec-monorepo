<script setup lang="ts">
import { Title } from '@/components/ui/title'
import { FormField } from '@/components/ui/form-field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useProjectCreateStore } from '@/stores/project/project-create.ts'
import { Button } from '@/components/ui/button'
import { TagsInput, TagsInputInput } from '@/components/ui/tags-input'
import { ref } from 'vue'

const store = useProjectCreateStore()
const [title, titleProps] = store.defineField('title')
const [description, descriptionProps] = store.defineField('description')
const [tags, tagsProps] = store.defineField('tags')
</script>

<template>
  <div class="flex flex-col w-full gap-8">
    <Title title="Project" subtitle="Create new project" />
    <div class="flex flex-col h-full justify-between">
      <form id="project-create-form" class="flex flex-col gap-4" @submit="store.onSubmit">
        <FormField id="title" label="Title" :error="store.errors.title">
          <Input id="title" placeholder="Title" v-model="title" v-bind="titleProps" class="bg-white" />
        </FormField>
        <FormField id="description" label="Description" :error="store.errors.description">
          <Textarea
            id="description"
            placeholder="Description"
            v-model="description"
            v-bind="descriptionProps"
            rows="10"
            class="bg-white"
          />
        </FormField>
        <FormField id="tags" label="Tags" :error="store.errors.tags">
          <TagsInput v-model="tags as string[]">
            <TagsInputItem v-for="item in tags" :key="item" :value="item">
              <TagsInputItemText>
                {{ item }}
              </TagsInputItemText>
            </TagsInputItem>
            <TagsInputInput placeholder="Tags" v-bind="tagsProps"/>
          </TagsInput>
        </FormField>
      </form>
      <div class="flex gap-4 flex-col md:flex-row justify-between">
        <router-link :to="{ name: 'projects' }">
          <Button>Cancel</Button>
        </router-link>
        <Button form="project-create-form" type="submit" :disabled="store.loading">
          <span v-if="store.loading">Creating...</span>
          <span v-else>Create</span>
        </Button>
      </div>
    </div>
  </div>
</template>
