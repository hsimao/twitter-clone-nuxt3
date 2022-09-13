<template>
  <div>
    <h1>list fedd</h1>

    <ul>
      <li v-for="tweet in tweets">
        {{ tweet.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  tweets: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
