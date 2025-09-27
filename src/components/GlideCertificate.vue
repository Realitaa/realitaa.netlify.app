<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Glide from '@glidejs/glide'
import { Images } from '@glidejs/glide/dist/glide.modular.esm'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const glideRef = ref(null)
let glide = null
const data = defineProps({
  title: {
    type: String,
    required: true,
  },
  certificates: {
    type: Array,
    required: true,
  },
})
const certificates = data.certificates
let activeCertificate = ref(certificates[0])

// Fungsi untuk berpindah ke slide yang diklik
const goToSlide = (index) => {
  if (glide) {
    glide.go(`=${index}`)
  }
  activeCertificate.value = certificates[glide.index]
}

onMounted(() => {
  if (glideRef.value) {
    glide = new Glide(glideRef.value, {
      type: 'slider',
      startAt: 0,
      perView: 2, // Jumlah slide yang terlihat sekaligus
      focusAt: 'center',
      gap: 25, // Jarak antar slide
      breakpoints: {
        800: {
          perView: 2,
        },
        480: {
          perView: 1,
        },
      },
    })
    glide.mount({ Images })
  }
})

// Opsional: Cleanup saat komponen di-unmount
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
      {{ data.title }}
    </div>
    <div>
      <div class="glide" ref="glideRef">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li
              :key="index"
              v-for="(certificate, index) in certificates.sort((a, b) => a.id - b.id)"
              class="glide__slide"
              @click="goToSlide(index)"
            >
              <img
                :src="certificate.image[locale] || certificate.image"
                :alt="certificate.title[locale]"
                class="w-140"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <h2 class="text-xl font-semibold mt-6 text-center">
      <!-- Displaying the sertificate index -->
      {{ certificates.length > 1 ? `(${activeCertificate.id}/${certificates.length})` : '' }}
      <!-- Displaying the sertificate title -->
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

<style scoped>
.glide {
  width: 100%;
  margin: 0 auto;
}

.glide__slide {
  height: 384px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}
</style>
