<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'
import IconSkill from './IconSkill.vue'
import TextStream from './TextStream.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const tagline = computed(() => [t('hero.tagline.role1'), t('hero.tagline.role2')])
const vantaRef = ref(null)
let vantaEffect = null

onMounted(() => {
  vantaEffect = GLOBE({
    el: vantaRef.value,
    THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 0.7,
    scaleMobile: 0.8,
    color: 0xdc81ad,
    size: 0.8,
  })
})

onUnmounted(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>

<template>
  <div ref="vantaRef" class="w-full h-screen">
    <div class="mx-auto z-10 relative flex flex-col justify-center h-full">
      <div class="flex-2 ms-4 md:ms-7 lg:ms-10 flex flex-col justify-center h-full">
        <h1 class="text-3xl lg:text-6xl md:text-4xl font-semibold text-slate-200">
          <TextStream text="Reza Mulia Putra" />
        </h1>
        <p class="text-md lg:text-2xl md:text-xl mt-2 text-slate-300">
          <TextStream :text="tagline" />
        </p>
        <a
          href="#contact"
          class="mt-4 px-6 py-2 bg-slate-800 text-slate-200 rounded-lg hover:bg-primary hover:ring hover:ring-slate-900 transition duration-300 w-40"
        >
          {{ t('hero.CTA') }}
        </a>
      </div>
      <div class="flex flex-wrap gap-4 relative justify-center z-10 m-2 md:m-7 lg:m-10">
        <IconSkill icon="html-5" effect />
        <IconSkill icon="css-3" effect />
        <IconSkill icon="javascript" effect />
        <IconSkill icon="php" effect />
        <IconSkill icon="bootstrap" effect />
        <IconSkill icon="tailwindcss-icon" effect />
        <IconSkill icon="vue" effect />
        <IconSkill icon="codeigniter-icon" effect />
        <IconSkill icon="laravel" effect />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
