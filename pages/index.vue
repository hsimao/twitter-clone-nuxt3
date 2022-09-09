<template>
  <div class="">
    <MainSection title="Home" :loading="loading"> {{ user }} </MainSection>
  </div>
</template>

<script setup>
const loading = ref(false)

const { useAuthUser } = useAuth()
const user = useAuthUser()
</script>

<style lang="scss" scoped></style>
