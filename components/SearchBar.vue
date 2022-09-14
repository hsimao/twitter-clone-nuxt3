<template>
  <div class="relative m-2">
    <div
      class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer"
    >
      <div class="w-6 h-6"><MagnifyingGlassIcon @click="handleSearch" /></div>
    </div>
    <input
      type="text"
      v-model="search"
      placeholder="Search tweet"
      @keyup.enter="handleSearch"
      class="flex items-center w-full h-9 pl-12 text-sm font-normal text-black bg-gray-200 border border-gray-200 rounded-full shadow dark:text-gray-100 dark:bg-primary-400 dark:border-primary-400 focus:bg-gray-100 dark:focus:bg-primary-900 focus:outline-none focus:border focus:border-blue-200"
    />
  </div>
</template>

<script setup>
import MagnifyingGlassIcon from '@heroicons/vue/24/outline/MagnifyingGlassIcon.js'

const search = ref('')

const handleSearch = () => {
  useRouter().push({
    path: '/search',
    query: {
      q: search.value.trim()
    }
  })

  search.value = ''
}
</script>

<style lang="scss" scoped></style>
