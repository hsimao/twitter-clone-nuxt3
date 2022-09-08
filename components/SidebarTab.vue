<template>
  <nuxt-link
    to="#"
    class="w-min flex items-center p-3 rounded-full text-black hover:bg-gray-200 dark:hover:bg-primary-200 dark:text-white"
    :class="defaultTransition"
  >
    <!-- icon -->
    <div class="w-6 h-6">
      <slot name="icon" />
    </div>

    <!-- name -->
    <div class="hidden ml-4 text-xl xl:block" :class="textClass">
      <slot name="name" />
    </div>
  </nuxt-link>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig()

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})

const textClass = computed(() =>
  props.active ? 'font-semibold' : 'font-normal'
)
</script>

<style lang="scss" scoped></style>
