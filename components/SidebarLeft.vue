<template>
  <div class="h-screen flex flex-col">
    <!-- Logo -->
    <div
      class="w-min p-2 my-2 rounded-full hover:bg-blue-50 dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <SvgTwitter />
        </div>
      </nuxt-link>
    </div>

    <button
      @click="handleToggleDarkMode"
      class="text-primary-500 py-2 px-6 border rounded-full"
    >
      Toggle dark
    </button>

    <!-- Tabs -->
    <div class="mt-2 space-y-3">
      <SidebarTab
        v-for="tab in tabs"
        :key="tab.name"
        :link="tab.link"
        :active="tab.link === currentPath"
      >
        <template #icon>
          <component :is="tab.icon" />
        </template>
        <template #name>{{ tab.name }}</template>
      </SidebarTab>

      <!-- Tweet button xl 顯示-->
      <UIButton
        class="hidden xl:block"
        size="lg"
        liquid
        @click="emits('onTweet')"
      >
        <span class="font-bold">Tweet</span>
      </UIButton>

      <!-- Tweet button 小於 xl 顯示 -->
      <UIButton class="block xl:hidden" @click="$emit('onTweet')">
        <div class="w-6 h-6 font-bold">
          <PencilIcon />
        </div>
      </UIButton>
    </div>

    <!-- User info -->
    <div
      class="w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-primary-800 flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer"
      :class="defaultTransition"
      @click="emits('onLogout')"
    >
      <div class="flex flex-row">
        <!-- avatar -->
        <img
          v-if="user.profileImage"
          class="w-10 h-10 rounded-full"
          :src="user.profileImage"
        />

        <!-- name -->
        <div class="flex-col hidden ml-2 xl:block">
          <h2 class="text-sm font-bold text-gray-800 dark:text-white">
            {{ user.name }}
          </h2>
          <p class="text-sm text-gray-400">
            {{ user.handle }}
          </p>
        </div>
      </div>

      <!-- down icon -->
      <div class="hidden ml-auto xl:block">
        <div class="w-6 h-6">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeIcon from '@heroicons/vue/24/solid/HomeIcon.js'
import HashtagIcon from '@heroicons/vue/24/outline/HashtagIcon.js'
import BellIcon from '@heroicons/vue/24/outline/BellIcon.js'
import InboxIcon from '@heroicons/vue/24/outline/InboxIcon.js'
import BookmarkIcon from '@heroicons/vue/24/outline/BookmarkIcon.js'
import DocumentTextIcon from '@heroicons/vue/24/outline/DocumentTextIcon.js'
import UserIcon from '@heroicons/vue/24/outline/UserIcon.js'
import EllipsisHorizontalCircleIcon from '@heroicons/vue/24/outline/EllipsisHorizontalCircleIcon.js'
import PencilIcon from '@heroicons/vue/24/outline/PencilIcon.js'
import ChevronDownIcon from '@heroicons/vue/24/outline/ChevronDownIcon.js'

const emits = defineEmits(['onTweet', 'onLogout'])

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const { defaultTransition } = useTailwindConfig()

const tabs = [
  // Home
  {
    name: 'Home',
    icon: HomeIcon,
    link: '/'
  },
  // Hashtag
  {
    name: 'Explore',
    icon: HashtagIcon,
    link: '#'
  },
  // 通知
  {
    name: 'Notifications',
    icon: BellIcon,
    link: '#'
  },
  // Messages
  {
    name: 'Messages',
    icon: InboxIcon,
    link: '#'
  },
  // 收藏
  {
    name: 'Bookmarks',
    icon: BookmarkIcon,
    link: '#'
  },
  // Lists
  {
    name: 'Lists',
    icon: DocumentTextIcon,
    link: '#'
  },
  // Profile
  {
    name: 'Profile',
    icon: UserIcon,
    link: '#'
  },
  // More
  {
    name: 'More',
    icon: EllipsisHorizontalCircleIcon,
    link: '#'
  }
]

const currentPath = computed(() => useRoute().path)

//  global emit toggleDarkMode
const emitter = useEmitter()
const handleToggleDarkMode = () => emitter.$emit('toggleDarkMode')
</script>

<style lang="scss" scoped></style>
