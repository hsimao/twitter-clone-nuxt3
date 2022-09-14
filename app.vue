<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-primary-900">
      <!-- loading -->
      <LoadingPage v-if="isAuthLoading" />

      <!-- App -->
      <div v-else-if="user" class="min-h-full border">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- Left Sidebar -->
          <div class="col-span-1 xl:col-span-2 hidden md:block">
            <div class="sticky top-0">
              <SidebarLeft
                @on-tweet="togglePostTweetModal(true)"
                @on-toggle-mode="toggleDarkMode"
              />
            </div>
          </div>

          <!-- Main content -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <NuxtPage />
          </main>

          <!-- Right Sidebar -->
          <div class="col-span-12 md:col-span-3 xl:col-span-4 hidden md:block">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>

      <!-- auth form -->
      <AuthPage v-else />

      <!-- tweet form 彈窗 -->
      <ClientOnly>
        <UIModal
          :is-open="postTweetModal"
          @on-close="togglePostTweetModal(false)"
        >
          <TweetForm
            v-if="user"
            :user="user"
            :replyTo="replyTweet"
            showReply
            @on-success="handleTweetFormSuccess"
          />
        </UIModal>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
const { useAuthUser, initAuth, useAuthLoading } = useAuth()

const isAuthLoading = useAuthLoading()

const user = useAuthUser()

const darkMode = ref(false)

const toggleDarkMode = () => (darkMode.value = !darkMode.value)

// tweet modal
const { togglePostTweetModal, usePostTweetModal, setReplyTo, useReplyTweet } =
  useTweets()

const postTweetModal = usePostTweetModal()
const replyTweet = useReplyTweet()

const handleTweetFormSuccess = async (tweet) => {
  togglePostTweetModal(false)

  await navigateTo(`/tweet/${tweet.id}`)
}

// 監聽全局自定義 emit 事件
const emitter = useEmitter()

// 監聽 replyTweet
emitter.$on('replyTweet', (tweet) => {
  // close modal
  togglePostTweetModal(true)

  //save reply tweet
  setReplyTo(tweet)
})

// init
onBeforeMount(() => initAuth())
</script>
