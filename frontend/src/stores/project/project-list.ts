import { defineStore } from 'pinia'
import type { DataTableAction, DataTableColumn } from '@/components/ui/data-table'
import type { Project } from '@/types/project.ts'
import { MagnifyingGlassIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/16/solid'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import { projectDeleteService } from '@/services/project/project-delete.service.ts'

export const useProjectListStore = defineStore('useProjectListStore', () => {
  const router = useRouter()

  const columns: DataTableColumn<Project>[] = [
    {
      key: 'title',
      label: 'Title',
      sortable: true,
    },
    {
      key: 'tags',
      label: 'tags',
      value: (row: Project) => row.tags?.map((tag) => tag.name),
    },
  ]

  const actions: DataTableAction<Project>[] = [
    {
      label: 'Show',
      icon: MagnifyingGlassIcon,
      onClick: async (item: Project) => {
        await router.push(`/projects/${item.id}`)
      },
    },
    {
      label: 'Edit',
      icon: PencilSquareIcon,
      onClick: async (item: Project) => {
        await router.push(`/projects/${item.id}/edit`)
      },
    },
    {
      label: 'Delete',
      icon: TrashIcon,
      onClick: async (item: Project) => {
        handleDelete(item)
      },
    },
  ]

  const handleDelete = async (item: Project) => {
    const id = toast.loading('Deleting project...')

    try {
      await projectDeleteService(item)
      toast.update(id, {
        render: 'Project deleted successfully',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      router.go(0)
    } catch {
      toast.update(id, {
        render: 'An error occurred while deleting the project. Please try again later.',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      })
    }
  }

  return {
    columns,
    actions,
  }
})
