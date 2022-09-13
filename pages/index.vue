<template>
  <MainSection title="Home" :loading="loading">
    <!-- meta -->
    <Head>
      <Title>Home / Twitter</Title>
    </Head>

    <div class="border-b" :class="twitterBorderColor">
      <TweetForm :user="user" />
    </div>

    <TweetListFeed :tweets="homeTweets" />
  </MainSection>
</template>

<script setup>
const loading = ref(false)
const homeTweets = ref([])

const { useAuthUser } = useAuth()
const user = useAuthUser()
const { twitterBorderColor } = useTailwindConfig()

// get tweets
const { getHomeTweets } = useTweets()
onBeforeMount(async () => {
  loading.value = true

  const { tweets } = await getHomeTweets().catch(console.wran)
  homeTweets.value = !!tweets ? tweets : []

  loading.value = false
})
</script>
