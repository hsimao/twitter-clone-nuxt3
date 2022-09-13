<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>

    <TweetInput
      v-else
      :user="user"
      @onSubmit="handleFormSubmit"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  placeholder: {
    type: String,
    default: "What's happening ?"
  }
})

const loading = ref(false)

const handleFormSubmit = async (data) => {
  loading.value = true
  await useTweets().postTweet(data).catch(console.log)
  loading.value = false
}
</script>

<style lang="scss" scoped></style>
