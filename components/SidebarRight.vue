<template>
  <div class="flex flex-col">
    <!-- Search bar -->
    <SearchBar />

    <!-- Preview card : What's happening -->
    <PreviewCard title="What's happening">
      <PreviewCardItem v-for="whatsHappening in happeningItems">
        <PreviewCardItemBase
          :title="whatsHappening.title"
          :count="whatsHappening.count"
        />
      </PreviewCardItem>
    </PreviewCard>

    <!-- Preview card: Who to follow -->
    <PreviewCard title="Who to follow">
      <PreviewCardItem v-for="follow in followItems">
        <PreviewCardItemFollow v-bind="follow" />
      </PreviewCardItem>
    </PreviewCard>

    <SidebarRightFooter />
  </div>
</template>

<script setup>
const happeningItems = ref([
  {
    title: 'SpaceX',
    count: '18.8k Tweets'
  },
  {
    title: '#CodingIsFun',
    count: '8.8k Tweets'
  },
  {
    title: '#artforall',
    count: '1.8k Tweets'
  }
])

const followItems = ref([
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200'
  }
])
</script>

<style lang="scss" scoped></style>
