<script setup>
import TextStream from './components/TextStream.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="flex justify-center items-center h-[80vh] mt-37.5 -mb-37.5">
    <div
      class="text-center border-4 border-primary rounded-3xl p-4 relative mt-5 max-w-[90%] w-[928px]"
    >
      <div class="flex justify-center items-center w-full">
        <img
          src="/404.png"
          alt="404 Not Found"
          class="absolute md:-top-72.5 md:w-75 md:max-w-full w-60 -top-[232.5px] xm:w-70 xm:-top-47.5"
          title="https://www.pixiv.net/en/artworks/102739514"
        />
      </div>
      <h1 class="text-6xl font-bold mb-4 tracking-widest">404</h1>
      <div class="flex justify-center w-full">
        <TextStream :text="t('message.not_found')" speed="60" />
      </div>
      <RouterLink
        to="/"
        class="mt-4 mx-auto px-6 py-2 block w-fit bg-slate-800 text-slate-200 rounded-lg hover:bg-primary hover:ring hover:ring-slate-900 transition duration-300"
      >
        {{ t('button.not_found') }}
      </RouterLink>
    </div>
    <!-- <hr class="border-t-2 border-slate-700 w-full my-4" /> -->
  </div>
</template>

<style scoped></style>
