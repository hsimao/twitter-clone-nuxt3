<template>
  <div>
    <label
      v-if="label"
      class="block pl-3 ml-px text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <input
      class="block mt-1 px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="handleInput"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
})

const emits = defineEmits(['update:modelValue'])

const handleInput = (event) => {
  const formatValue = event.target.value.trim()
  emits('update:modelValue', formatValue)
}
</script>

<style lang="scss" scoped></style>
