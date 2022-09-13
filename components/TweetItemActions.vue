<template>
  <div class="w-full flex items-center justify-around">
    <TweetItemActionsIcon color="blue">
      <template #icon="{ iconclass }">
        <ChatBubbleOvalLeftEllipsisIcon :class="iconclass" />
      </template>
      {{ tweet.repliesCount }}
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="green">
      <template #icon="{ iconclass }">
        <ArrowPathIcon :class="iconclass" />
      </template>
      {{ generateRandomNumber() }}
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="red">
      <template #icon="{ iconclass }">
        <HeartIcon :class="iconclass" />
      </template>
      {{ generateRandomNumber() }}
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="blue">
      <template #icon="{ iconclass }">
        <ArrowUpTrayIcon :class="iconclass" />
      </template>
      {{ generateRandomNumber() }}
    </TweetItemActionsIcon>
  </div>
</template>

<script setup>
import ChatBubbleOvalLeftEllipsisIcon from '@heroicons/vue/24/outline/ChatBubbleOvalLeftEllipsisIcon.js'
import ArrowPathIcon from '@heroicons/vue/24/outline/ArrowPathIcon.js'
import HeartIcon from '@heroicons/vue/24/outline/HeartIcon.js'
import ArrowUpTrayIcon from '@heroicons/vue/24/outline/ArrowUpTrayIcon.js'

defineProps({
  tweet: {
    type: Object,
    required: true
  }
})

const generateRandomNumber = () => Math.floor(Math.random() * 100)
</script>

<style lang="scss" scoped></style>
