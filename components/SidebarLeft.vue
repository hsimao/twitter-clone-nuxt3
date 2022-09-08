<template>
  <div class="h-screen flex flex-col">
    <!-- Logo -->
    <div
      class="w-min p-2 my-2 rounded-full hover:bg-blue-50 dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>

    <!-- Tabs -->
    <div class="mt-2 space-y-3">
      <SidebarTab
        v-for="tab in tabs"
        :key="tab.name"
        :active="tab.link === currentPath"
      >
        <template #icon>
          <component :is="tab.icon" />
        </template>
        <template #name>{{ tab.name }}</template>
      </SidebarTab>
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
</script>

<style lang="scss" scoped></style>
