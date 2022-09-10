<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>

    <TweetInput v-else :user="user" @onSubmit="handleFormSubmit" />
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const loading = ref(false)

const handleFormSubmit = async (data) => {
  try {
    loading.value = true
    const response = await useTweets().postTweet(data)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped></style>
