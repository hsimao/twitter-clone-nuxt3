<template>
  <div>
    <TweetItem :tweet="tweet" />

    <TweetForm placeholder="Tweet your reply" :user="user" :reply-to="tweet" />

    <TweetListFeed :tweets="replies" />
  </div>
</template>

<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true
  },
  user: {
    type: Object,
    required: true
  }
})

const replies = computed(() => props.tweet?.replies || [])
</script>
