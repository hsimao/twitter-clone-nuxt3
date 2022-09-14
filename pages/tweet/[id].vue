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

  // 回首頁
  if (!response) {
    const router = useRouter()
    return router.push('/')
  }

  tweet.value = response.tweet

  loading.value = false
}

onBeforeMount(() => {
  getTweet(useRoute().params.id)
})
</script>
