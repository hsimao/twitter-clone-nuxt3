<template>
  <div>
    <h3 class="font-bold text-gray-800 text-md dark:text-white">
      {{ title }}
    </h3>
    <p class="text-xs text-gray-400">{{ count }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ""
  },
  count: {
    type: String,
    default: ""
  }
});
</script>
