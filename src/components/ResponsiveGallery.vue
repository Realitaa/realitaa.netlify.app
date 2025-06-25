<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
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

const activeCertificate = ref(certificates[0]) // Sertifikat pertama sebagai default
const scrollContainer = ref(null)
const isMobile = ref(window.innerWidth <= 768)
// const updateIsMobile = () => {
//   isMobile.value = window.innerWidth <= 768
// }

const updateActiveCertificate = () => {
  if (!scrollContainer.value) return
  if (isMobile.value) {
    // Vertical scrolling for mobile
    const scrollTop = scrollContainer.value.scrollTop
    const certificateHeight = 242 + 40 // Adjust height based on your image height (e.g., 384px) + gap-10 (40px)
    const activeIndex = Math.round(scrollTop / certificateHeight)
    activeCertificate.value = certificates[activeIndex] || certificates[0]
  } else {
    // Horizontal scrolling for desktop
    const scrollLeft = scrollContainer.value.scrollLeft
    const certificateWidth = 520 + 40 // w-130 (520px) + gap-10 (40px)
    const activeIndex = Math.round(scrollLeft / certificateWidth)
    activeCertificate.value = certificates[activeIndex] || certificates[0]
  }
}

const scrollToCertificate = (index) => {
  if (!scrollContainer.value) return
  if (isMobile.value) {
    // Vertical scrolling for mobile
    const certificateHeight = 242 + 40 // Adjust height based on your image height + gap-10
    const scrollPosition = index * certificateHeight
    scrollContainer.value.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    })
  } else {
    // Horizontal scrolling for desktop
    const certificateWidth = 520 + 40 // w-130 (520px) + gap-10 (40px)
    const scrollPosition = index * certificateWidth
    scrollContainer.value.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', updateActiveCertificate)
  }
})

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', updateActiveCertificate)
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
    <div
      ref="scrollContainer"
      class="md:snap-x md:h-auto w-full overflow-y-auto md:overflow-x-auto md:overflow-y-hidden flex flex-col md:flex-row items-center gap-10 scrollbar-hide"
      :class="{ 'h-96': certificates.length > 1 }"
      @scroll="updateActiveCertificate"
    >
      <div
        v-for="(certificate, index) in certificates.sort((a, b) => a.id - b.id)"
        :key="index"
        class="md:snap-center flex-shrink-0 flex flex-col items-center"
        :class="{
          'md:ml-50 lg:ml-100': index === 0,
          'md:mr-50 lg:mr-100': index === certificates.length - 1,
          'mb-50 md:mb-0': isMobile && index === certificates.length - 1 && certificates.length > 1,
        }"
      >
        <a
          :href="activeCertificate.id === certificate.id ? certificate.link : null"
          class="group"
          target="_blank"
        >
          <div
            class="relative w-full md:w-130"
            @click="activeCertificate === certificate ? null : scrollToCertificate(index)"
          >
            <img
              :src="certificate.image[locale] || certificate.image"
              :alt="certificate.title[locale]"
              class="w-full md:w-130 h-60.5 md:h-auto rounded-lg shadow-lg opacity-50"
              :class="{ 'opacity-100': activeCertificate.id === certificate.id }"
              loading="lazy"
            />
            <div
              v-if="activeCertificate.id === certificate.id && !isMobile"
              class="absolute bottom-0 left-0 right-0 text-lg font-bold text-primary text-center bg-slate-900 rounded-b-lg py-2 translate-y-full transition duration-300 ease-in-out group-hover:translate-y-0"
            >
              Click to see details
            </div>
          </div>
        </a>
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
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
