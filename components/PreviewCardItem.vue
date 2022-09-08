<template>
  <div
    class="p-3 border-b hover:bg-gray-100 cursor-pointer dark:hover:bg-primary-300"
    :class="wrapperClass"
  >
    <slot />
  </div>
</template>

<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig()

const wrapperClass = computed(
  () => `${defaultTransition} ${twitterBorderColor}`
)
</script>

<style lang="scss" scoped></style>
