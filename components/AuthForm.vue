<template>
  <div class="w-full">
    <!-- logo -->
    <div class="flex justify-center">
      <SvgTwitter class="w-10 h-10" />
    </div>

    <!-- form -->
    <div class="pt-5 space-y-6">
      <UIInput v-model="username" label="Username" placeholder="@username" />

      <UIInput
        v-model="password"
        @keyup.enter="handleLogin"
        type="password"
        label="Password"
        placeholder="********"
      />

      <UIButton @click="handleLogin" liquid :disabled="disabled">
        Login
      </UIButton>
    </div>
  </div>
</template>

<script setup>
const password = ref('123456')
const username = ref('jack')
const isLoading = ref(false)

const disabled = computed(() => {
  return !username.value || !password.value || isLoading.value
})

const { login } = useAuth()

const handleLogin = async () => {
  isLoading.value = true

  await login({
    username: username.value,
    password: password.value
  }).catch(console.log)

  isLoading.value = false
}
</script>

<style lang="scss" scoped></style>
