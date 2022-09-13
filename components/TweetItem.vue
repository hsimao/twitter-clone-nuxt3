<template>
  <div>
    <TweetItemHeader :tweet="tweet" />

    <!-- content -->
    <div class="ml-16">
      <p class="flex-shrink w-auto font-medium text-gray-800 dark:text-white">
        {{ tweet.text }}
      </p>

      <!-- images -->
      <div
        v-for="image in tweet.mediaFiles"
        class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="twitterBorderColor"
        :key="image.id"
      >
        <img :src="image.url" class="w-full rounded-2xl" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true
  }
})

const { twitterBorderColor } = useTailwindConfig()
</script>

<style lang="scss" scoped></style>
