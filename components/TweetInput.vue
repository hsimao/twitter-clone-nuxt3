<template>
  <div>
    <!-- Top area -->
    <div class="flex items-center flex-shrink-0 p-4 pb-0">
      <!-- user avatar -->
      <div class="flex w-12 items-start">
        <img
          class="inline-block w-10 h-10 rounded-full"
          :src="profileImage"
          :alt="user.name"
        />
      </div>

      <!-- text input -->
      <div class="w-full p-2">
        <textarea
          v-model="text"
          placeholder="What's happening ?"
          class="w-full h-10 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0"
        />
      </div>
    </div>

    <!-- File Selector -->
    <div class="p-4 pl-16">
      <!-- preview image -->
      <img
        v-if="imagePreview"
        :src="imagePreview"
        alt="preview image"
        class="max-h-60 rounded-2xl border"
        :class="twitterBorderColor"
      />

      <input
        ref="imageInputRef"
        type="file"
        hidden
        accept="image/jpg, image/jpeg, image/png, image/gif"
        @change="handleImageChange"
      />
    </div>

    <!-- Bottom area -->
    <div class="flex p-2 pl-14">
      <!-- icons -->
      <div class="flex w-full text-white">
        <!-- File upload -->
        <div class="tweet-input-svg" @click="handleImageClick">
          <SvgImage />
        </div>

        <!-- Gif -->
        <div class="tweet-input-svg">
          <SvgGif />
        </div>

        <!-- Chart -->
        <div class="tweet-input-svg">
          <SvgChart />
        </div>

        <!-- Emoji -->
        <div class="tweet-input-svg">
          <SvgEmoji />
        </div>

        <!-- Calendar -->
        <div class="tweet-input-svg">
          <SvgCalendar />
        </div>
      </div>

      <!-- submit button -->
      <div class="ml-auto">
        <UIButton size="sm" @click="handleSubmit">
          <span class="font-bold">Tweet</span>
        </UIButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig()
const emits = defineEmits(['onSubmit'])

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const text = ref('')
const profileImage = computed(() => props.user?.profileImage)

// Image upload logic
const imageInputRef = ref(null)
const selectedFile = ref(null)
const imagePreview = ref(null)

const handleImageClick = () => imageInputRef.value?.click()

const handleImageChange = (event) => {
  // update selectedFile
  const file = event.target.files[0]
  selectedFile.value = file

  // update imagePreview
  const reader = new FileReader()

  reader.onload = (event) => (imagePreview.value = event.target.result)

  reader.readAsDataURL(file)
}

const handleSubmit = () => {
  const formatText = text.value.trim()
  if (!formatText) return

  emits('onSubmit', {
    text: formatText,
    mediaFiles: [selectedFile.value]
  })
}
</script>

<style lang="scss" scoped>
.tweet-input-svg {
  @apply p-2 text-blue-400 cursor-pointer rounded-full hover:bg-blue-50 dark:hover:bg-primary-800;
}
</style>
