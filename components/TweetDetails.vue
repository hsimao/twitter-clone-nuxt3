<template>
  <div>
    <TweetItem :tweet="tweet" />

    <TweetForm
      placeholder="Tweet your reply"
      :user="user"
      :reply-to="tweet"
      @on-success="handleFormSuccess"
    />

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

const handleFormSuccess = async (tweet) => {
  await navigateTo({
    path: `/tweet/${tweet.id}`
  })
}
</script>
