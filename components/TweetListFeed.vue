<template>
  <div>
    <!-- empty -->
    <div v-if="isEmpty" class="p-4">
      <p class="text-center text-gray-500">No tweets 😢</p>
    </div>

    <!-- tweets -->
    <div
      v-else
      class="pb-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-primary-300"
      :class="[twitterBorderColor, defaultTransition]"
      v-for="tweet in tweets"
      :key="tweet.id"
    >
      <TweetItem :tweet="tweet" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tweets: {
    type: Array,
    required: true
  }
})

const { twitterBorderColor, defaultTransition } = useTailwindConfig()

const isEmpty = computed(() => !props.tweets.length)
</script>

<style lang="scss" scoped></style>
