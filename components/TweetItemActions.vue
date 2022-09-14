<template>
  <div class="w-full flex items-center justify-around">
    <!-- 留言 -->
    <TweetItemActionsIcon color="blue" :size="iconSize">
      <template #icon="{ iconclass }">
        <ChatBubbleOvalLeftEllipsisIcon :class="iconclass" />
      </template>

      <template #default v-if="showStats">
        {{ tweet.repliesCount }}
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="green" :size="iconSize">
      <template #icon="{ iconclass }">
        <ArrowPathIcon :class="iconclass" />
      </template>

      <template #default v-if="showStats">
        {{ generateRandomNumber() }}
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="red" :size="iconSize">
      <template #icon="{ iconclass }">
        <HeartIcon :class="iconclass" />
      </template>

      <template #default v-if="showStats">
        {{ generateRandomNumber() }}
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="blue" :size="iconSize">
      <template #icon="{ iconclass }">
        <ArrowUpTrayIcon :class="iconclass" />
      </template>

      <template #default v-if="showStats">
        {{ generateRandomNumber() }}
      </template>
    </TweetItemActionsIcon>
  </div>
</template>

<script setup>
import ChatBubbleOvalLeftEllipsisIcon from '@heroicons/vue/24/outline/ChatBubbleOvalLeftEllipsisIcon.js'
import ArrowPathIcon from '@heroicons/vue/24/outline/ArrowPathIcon.js'
import HeartIcon from '@heroicons/vue/24/outline/HeartIcon.js'
import ArrowUpTrayIcon from '@heroicons/vue/24/outline/ArrowUpTrayIcon.js'

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

const showStats = computed(() => props.compact)

const iconSize = computed(() => (props.compact ? 5 : 8))

const generateRandomNumber = () => Math.floor(Math.random() * 100)
</script>

<style lang="scss" scoped></style>
