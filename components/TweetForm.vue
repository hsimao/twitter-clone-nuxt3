<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>

    <div v-else>
      <!-- reply tweet -->
      <TweetItem v-if="currentShowReply" :tweet="replyTo" hideActions />

      <!-- input -->
      <TweetInput
        :user="user"
        @onSubmit="handleFormSubmit"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['onSuccess'])

const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  placeholder: {
    type: String,
    default: "What's happening ?"
  },
  // 要回覆的 tweet
  replyTo: {
    type: Object,
    default: null
  },
  showReply: {
    type: Boolean,
    default: false
  }
})

const loading = ref(false)

const currentShowReply = computed(() => props.showReply && props.replyTo)

const handleFormSubmit = async (data) => {
  loading.value = true

  const { postTweet } = useTweets()

  await postTweet({
    text: data.text,
    mediaFiles: data.mediaFiles,
    replyTo: props.replyTo?.id
  })
    .then((response) => emits('onSuccess', response.tweet))
    .catch(console.log)

  loading.value = false
}
</script>

<style lang="scss" scoped></style>
