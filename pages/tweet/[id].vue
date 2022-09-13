<template>
  <MainSection title="Tweet" :loading="loading">
    <!-- meta -->
    <Head>
      <Title> Twitter</Title>
    </Head>

    <TweetDetails :user="user" :tweet="tweet" />
  </MainSection>
</template>

<script setup>
const loading = ref(false)
const tweet = ref(null)

const { useAuthUser } = useAuth()
const user = useAuthUser()

const getTweet = async (id) => {
  loading.value = true

  const response = await useTweets().getTweetById(id).catch(console.log)
  tweet.value = response.tweet

  loading.value = false
}

onBeforeMount(() => {
  const { params } = useRoute()
  getTweet(params.id)
})
</script>
