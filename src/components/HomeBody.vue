<script setup>
import TimeLineList from './TimeLineList.vue'
import ContactList from './ContactList.vue'
import TextStream from './TextStream.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="w-full pb-20 px-5 sm:px-6 md:px-10 lg:px-30">
    <h1 class="text-slate-300 text-4xl text-center my-5">{{ t('about.title') }}</h1>
    <p class="text-slate-300 mt-2">
      <TextStream speed="25" :text="`${t('about.content')}`" />
    </p>

    <h1 class="text-slate-300 text-4xl text-center my-5">{{ t('education') }}</h1>

    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <TimeLineList
        :time="t('timeline.education[0].time')"
        :title="t('timeline.education[0].title')"
        :description="t('timeline.education[0].description')"
      />
      <TimeLineList
        :time="t('timeline.education[1].time')"
        :title="t('timeline.education[1].title')"
        :description="t('timeline.education[1].description')"
      />
    </ol>

    <h1 class="text-slate-300 text-4xl text-center my-5">{{ t('experience') }}</h1>
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <TimeLineList
        :time="t('timeline.experience[0].time')"
        :title="t('timeline.experience[0].title')"
        :description="t('timeline.experience[0].description')"
      />
      <TimeLineList
        :time="t('timeline.experience[1].time')"
        :title="t('timeline.experience[1].title')"
        :description="t('timeline.experience[1].description')"
      />
      <TimeLineList
        :time="t('timeline.experience[2].time')"
        :title="t('timeline.experience[2].title')"
        :description="t('timeline.experience[2].description')"
      />
    </ol>

    <div id="contact">
      <h1 class="text-slate-300 text-4xl text-center my-5">{{ t('contact') }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ContactList
          icon="whatsapp-icon"
          name="Whatsapp"
          link="https://api.whatsapp.com/send?phone=6288807673506"
        />
        <ContactList icon="telegram" name="Telegram" link="https://t.me/Realitaa822" />
        <ContactList icon="linkedin-icon" name="LinkedIn" link="https://linkedin.com/in/Realitaa" />
        <ContactList
          icon="instagram-icon"
          name="Instagram"
          link="https://instagram.com/reza_mputra01"
        />
        <ContactList
          icon="discord-icon"
          name="Discord"
          link="https://discord.com/users/911091445736304700"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
