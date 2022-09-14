<template>
  <footer>
    <ul class="mx-2 my-4 text-xs text-gray-500">
      <li class="inline-block mx-2">
        <a
          href="#"
          class="hover:underline"
          @click.prevent="handleToggleDarkMode"
          >Dark mode</a
        >
      </li>

      <li class="inline-block mx-2">
        <a href="#" class="hover:underline">Privacy Policy</a>
      </li>

      <li class="inline-block mx-2">
        <a href="#" class="hover:underline">Cookie Policy</a>
      </li>

      <li class="inline-block mx-2">
        <a href="#" class="hover:underline">Accessability</a>
      </li>

      <li class="inline-block mx-2">
        <a href="#" class="hover:underline">Ads info</a>
      </li>

      <li class="inline-block mx-2">
        <a href="#" class="hover:underline">More</a>
      </li>

      <li class="inline-block mx-2">{{ copyright }}</li>
    </ul>
  </footer>
</template>

<script setup>
const emitter = useEmitter()

const copyright = computed(() => {
  return `© ${new Date().getFullYear()} Twitter, Inc.`
})

const handleToggleDarkMode = () => {
  emitter.$emit('toggleDarkMode')
}
</script>

<style lang="scss" scoped></style>
