<template>
  <div>
    <TweetItemHeader :tweet="tweet" />

    <!-- content -->
    <div :class="wrapperClass">
      <p
        class="flex-shrink w-auto font-medium text-gray-800 dark:text-white"
        :class="textSize"
      >
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

      <!-- actions -->
      <div class="mt-2">
        <TweetItemActions :tweet="tweet" :compact="compact" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})

const { twitterBorderColor } = useTailwindConfig()

const wrapperClass = computed(() => (props.compact ? 'ml-16' : 'ml-2 mt-4'))

const textSize = computed(() => (props.compact ? 'text-base' : 'text-2xl'))
</script>

<style lang="scss" scoped></style>
