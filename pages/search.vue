<template>
  <MainSection title="Search" :loading="loading">
    <!-- meta -->
    <Head>
      <Title>Search</Title>
    </Head>

    <TweetListFeed :tweets="searchTweets" />
  </MainSection>
</template>

<script setup>
const loading = ref(false)
const searchTweets = ref([])

const { getTweets } = useTweets()

// get tweets
const initTweets = async () => {
  loading.value = true
  const searchQuery = useRoute().query.q

  const { tweets } = await getTweets({
    query: searchQuery
  }).catch(console.wran)

  searchTweets.value = !!tweets ? tweets : []

  loading.value = false
}

// 監聽 route
watch(
  () => useRoute().fullPath,
  () => initTweets()
)

// init
onBeforeMount(() => initTweets())
</script>
