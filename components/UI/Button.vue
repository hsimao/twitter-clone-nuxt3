<template>
  <button
    class="flex justify-center text-white bg-blue-400 rounded-full hover:bg-blue-500 font-sm disabled:bg-blue-300 disabled:cursor-not-allowed"
    :disabled="disabled"
    :class="classes"
  >
    <span :class="textFontSize">
      <slot />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  },
  // 寬度撐滿
  liquid: {
    type: Boolean,
    default: false
  }
})

// padding
const paddingClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'py-2 px-3'
    case 'lg':
      return 'px-4 py-3'
    default:
      return 'px-3 py-3'
  }
})

// font size
const textFontSize = computed(() => {
  switch (props.size) {
    case 'lg':
      return 'text-md'
    default:
      return 'text-sm'
  }
})

// width
const defaultWidth = computed(() => {
  switch (props.size) {
    default:
      return 'w-min'
  }
})

const widthClass = computed(() =>
  props.liquid ? 'w-full' : defaultWidth.value
)

const classes = computed(() => `${paddingClass.value} ${widthClass.value}`)
</script>

<style lang="scss" scoped></style>
