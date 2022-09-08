<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput v-model="username" label="Username" placeholder="@username" />

      <UIInput
        v-model="password"
        type="password"
        label="Password"
        placeholder="********"
      />

      {{ isLoading }}

      <button @click="handleLogin">Login</button>

      {{ user }}
    </div>
  </div>
</template>

<script setup>
const password = ref('')
const username = ref('')
const isLoading = ref(false)

const { login, useAuthUser } = useAuth()

const handleLogin = async () => {
  isLoading.value = true

  await login({
    username: username.value,
    password: password.value
  }).catch(console.log)

  isLoading.value = false
}

const user = useAuthUser()
</script>

<style lang="scss" scoped></style>
