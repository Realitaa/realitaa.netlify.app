<script setup>
import { computed } from 'vue'
import IconSkill from './IconSkill.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

const props = defineProps(['project'])
const project = computed(() => props.project)
</script>

<template>
  <div class="p-3 border border-primary my-20 rounded-xl">
    <div
      class="flex justify-between items-center relative bottom-8.5 w-full md:bottom-11 md:text-xl"
    >
      <div class="bg-slate-900 tracking-wide h-fit rounded-full border border-primary p-2.5 ml-5">
        {{ project.title[locale] }}
      </div>
      <div class="md:flex gap-3 mr-5 hidden">
        <IconSkill v-for="icon in project.tech" :key="icon" :icon="icon" />
      </div>
    </div>
    <div class="md:flex md:justify-between gap-5 mx-5 mb-5 -mt-3 text-md md:flex-row-reverse">
      <img
        :src="'https://realitaa-bucket.s3.ap-southeast-1.amazonaws.com/projects/' + project.image"
        :alt="project.title"
        class="w-full md:w-130 h-auto rounded-lg shadow-lg"
      />
      <div class="flex gap-3 m-5 md:hidden justify-center">
        <IconSkill v-for="icon in project.tech" :key="icon" :icon="icon" size="5" />
      </div>
      <div>
        <p class="mt-2">
          {{ project.description[locale] }}
        </p>
        <div class="mt-3">
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            class="px-6 py-2 bg-slate-800 text-slate-200 rounded-lg hover:bg-primary hover:ring hover:ring-slate-900 transition duration-300 w-40"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
