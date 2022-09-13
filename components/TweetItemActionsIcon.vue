<template>
  <div class="flex items-center text-gray-400 cursor-pointer group">
    <div
      :class="`p-2 group-hover:bg-${color}-100 group-hover:text-${color}-400 rounded-full dark:group-hover:bg-opacity-20 ${defaultTransition}`"
    >
      <slot name="icon" iconclass="w-5 h-5" />
    </div>
    <span :class="`ml-1 hover:text-${color}-400 group-hover:text-${color}-400`">
      <slot />
    </span>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    required: true
  }
})

const { defaultTransition } = useTailwindConfig()
</script>

<style lang="scss" scoped></style>
