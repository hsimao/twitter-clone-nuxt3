<template>
  <div class="p-4 flex">
    <!-- avatar -->
    <img
      class="w-10 h-10 rounded-full"
      :src="author.profileImage"
      :alt="author.name"
    />

    <div class="ml-3">
      <!-- name -->
      <span class="font-medium text-gray-800 dark:text-white">
        {{ author.name }}
      </span>

      <!-- handle, time -->
      <span class="ml-3 text-sm font-medium text-gray-400">
        <nuxt-link to="#">
          {{ author.handle }}
        </nuxt-link>
        . {{ tweet.postedAtHuman }}
      </span>

      <!-- 回覆 -->
      <p v-if="hasReplyTo" class="block text-sm">
        <span class="text-gray-500"> Replying to </span>
        <nuxt-link :to="replyToTweetUrl" class="text-blue-400">
          {{ replayToLinkText }} {{ replyToTweetUrl }}
        </nuxt-link>
      </p>
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

const author = props.tweet.author

const hasReplyTo = computed(() => !!props.tweet.replyTo)

const replyToTweetUrl = computed(() =>
  hasReplyTo.value ? `/tweet/${props.tweet.replyTo.id}` : ''
)

const replayToLinkText = computed(() =>
  hasReplyTo.value ? `${props.tweet.replyTo.author.handle}` : ''
)
</script>

<style lang="scss" scoped></style>
