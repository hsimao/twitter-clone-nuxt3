<template>
  <div
    class="m-2 border bg-gray-50 rounded-2xl dark:bg-primary-700 overflow-hidden"
    :class="twitterBorderColor"
  >
    <!-- title -->
    <h2
      class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white"
      :class="twitterBorderColor"
    >
      {{ title }}
    </h2>

    <slot />

    <!-- more -->
    <div
      class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 hover:dark:bg-primary-300"
      :class="defaultTransition"
    >
      Show more
    </div>
  </div>
</template>

<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();

defineProps({
  title: {
    type: String,
    default: ""
  }
});
</script>

<style lang="scss" scoped></style>
