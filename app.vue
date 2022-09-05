<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-primary-900">
      <div
        class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
      >
        <!-- Left Sidebar -->
        <div class="col-span-1 xl:col-span-2 hidden md:block">
          <div class="sticky top-0">
            <SidebarLeft />
          </div>
        </div>

        <!-- Main content -->
        <main class="col-span-12 md:col-span-8 xl:col-span-6">
          main content
          <button
            @click="toggleDarkMode"
            class="text-primary-500 py-2 px-6 border rounded-full"
          >
            toggle dark
          </button>
        </main>

        <!-- Right Sidebar -->
        <div class="col-span-12 md:col-span-3 xl:col-span-4 hidden md:block">
          <div class="sticky top-0">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(false);

const toggleDarkMode = () => (darkMode.value = !darkMode.value);
</script>
