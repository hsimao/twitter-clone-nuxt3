<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-primary-900">
      <!-- App -->
      <div v-if="user" class="min-h-full border">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- Left Sidebar -->
          <div class="col-span-1 xl:col-span-2 hidden md:block">
            <div class="sticky top-0">
              <button
                @click="toggleDarkMode"
                class="text-primary-500 py-2 px-6 border rounded-full"
              >
                toggle dark
              </button>
              <SidebarLeft />
            </div>
          </div>

          <!-- Main content -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <router-view />
          </main>

          <!-- Right Sidebar -->
          <div class="col-span-12 md:col-span-3 xl:col-span-4 hidden md:block">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>

      <AuthPage v-else />
    </div>
  </div>
</template>

<script setup>
const { useAuthUser, initAuth } = useAuth()

const user = useAuthUser()

const darkMode = ref(false)

const toggleDarkMode = () => (darkMode.value = !darkMode.value)

onBeforeMount(() => {
  initAuth()
})
</script>
