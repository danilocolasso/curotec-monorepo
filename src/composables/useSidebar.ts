import { ref } from 'vue'

const isCollapsed = ref(false)

export const useSidebar = () => {

  const toggleSidebar = () => {
    console.log(isCollapsed.value)
    isCollapsed.value = !isCollapsed.value
  }

  const closeSidebar = () => {
    isCollapsed.value = true
  }

  return {
    isCollapsed,
    toggleSidebar,
    closeSidebar,
  }
}
