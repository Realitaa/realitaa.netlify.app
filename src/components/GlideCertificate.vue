<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import Glide from '@glidejs/glide'
import { Images } from '@glidejs/glide/dist/glide.modular.esm'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })
const glideRef = ref(null)
let glide = null

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  certificates: {
    type: Array,
    required: true,
  },
})

const certificates = props.certificates
let activeCertificate = ref(certificates[0])

// Fungsi untuk berpindah ke slide yang diklik
const goToSlide = (index, link) => {
  if (index === activeCertificate.value.id - 1) {
    // Redirect ke anchor jika slide aktif
    window.open(link, '_blank')
  } else {
    // Pindah ke slide yang diklik
    glide.go(`=${index}`)
  }
}

onMounted(() => {
  if (glideRef.value) {
    glide = new Glide(glideRef.value, {
      type: 'slider',
      startAt: 0,
      perView: 2,
      focusAt: 'center',
      gap: 25,
      breakpoints: {
        976: {
          perView: 1,
        },
      },
    })

    glide.on(['mount.after', 'run'], function () {
      activeCertificate.value = certificates[glide.index]
    })

    glide.mount({ Images })
  }
})

onUnmounted(() => {
  if (glide) {
    glide.destroy()
  }
})
</script>

<template>
  <div class="p-3 border border-primary my-20 rounded-xl">
    <div
      class="block relative bottom-8.5 left-1 w-fit bg-slate-900 tracking-wide rounded-full border border-primary p-2.5 md:bottom-10 md:left-5 md:text-xl"
    >
      {{ props.title }}
    </div>
    <div>
      <div class="glide w-full my-0 mx-auto" ref="glideRef">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li
              v-for="(certificate, index) in certificates.sort((a, b) => a.id - b.id)"
              :key="index"
              class="glide__slide flex items-center justify-center rounded-l-sm group relative"
              @click="goToSlide(index, certificate.link)"
            >
              <img
                :src="certificate.image[locale] || certificate.image"
                :alt="certificate.title[locale]"
                class="w-140 h-auto"
              />
              <!-- Elemen informasi hanya untuk slide aktif -->
              <div
                v-show="certificate.id === activeCertificate.id"
                class="absolute bottom-0 left-0 right-0 text-lg font-bold text-primary text-center bg-slate-900 rounded-b-lg py-2 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 z-10"
              >
                {{ t('see_detail') }}
              </div>
            </li>
          </ul>
        </div>
        <!-- Elemen navigasi -->
        <div
          data-glide-el="controls"
          class="relative flex glide:hidden justify-between items-center mt-3 glide:my-0 z-20"
          v-if="certificates.length > 1"
        >
          <button data-glide-dir="<" class="p-2">
            <Icon icon="material-symbols:arrow-left-alt" class="w-10 h-10" />
          </button>
          <span class="font-bold text-lg">
            {{ `${activeCertificate.id} / ${certificates.length}` }}
          </span>
          <button data-glide-dir=">" class="p-2">
            <Icon icon="material-symbols:arrow-right-alt" class="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
    <h2 class="text-xl font-semibold mt-3 glide:mt-6 text-center">
      <span class="hidden glide:inline">
        {{ certificates.length > 1 ? `(${activeCertificate.id}/${certificates.length})` : '' }}
      </span>
      {{ activeCertificate ? activeCertificate.title[locale] : 'Pilih sertifikat' }}
    </h2>
    <p class="text-sm text-gray-400 mt-2 text-center">
      {{
        activeCertificate
          ? activeCertificate.description[locale]
          : 'Deskripsi akan muncul di kelulusan kelas'
      }}
    </p>
  </div>
</template>
