<template>
  <div class="flex flex-row justify-between p-2">
    <div class="flex flex-row">
      <img class="w-10 h-10 rounded-full" :src="image" :alt="name" />
      <div class="flex flex-col ml-2">
        <p class="text-sm font-bold text-gray-900 dark:text-white">
          {{ name }}
        </p>
        <p class="text-xs text-gray-400">{{ handle }}</p>
      </div>
    </div>
    <div class="flex h-full">
      <button
        class="px-4 py-2 rounded-full font-bold text-white dark:text-black bg-black dark:bg-white"
      >
        Follow
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: ''
  },
  handle: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
})
</script>
