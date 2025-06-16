<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const props = defineProps(['text', 'speed'])

const textRef = ref(null)
const isTyping = ref(false)
const typingSpeed = parseInt(props.speed, 10) || 50
const deletingSpeed = typingSpeed / 2 // Kecepatan menghapus lebih cepat
const delayBetween = 3000 // Jeda antar teks (ms)
let timeoutId = null // Simpan ID setTimeout untuk pembersihan

const clearAnimation = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }
  isTyping.value = false
  if (textRef.value) {
    textRef.value.textContent = '' // Kosongkan teks saat animasi dibersihkan
  }
}

const typeArrayText = (texts) => {
  clearAnimation() // Bersihkan animasi sebelumnya
  let textIndex = 0 // Indeks teks dalam array
  let charIndex = 0 // Indeks karakter dalam teks saat ini
  let isDeleting = false

  const type = () => {
    const currentText = texts[textIndex]
    isTyping.value = true // Kursor aktif selama mengetik, jeda, dan menghapus

    if (!isDeleting) {
      // Mengetik
      textRef.value.textContent = currentText.slice(0, charIndex + 1)
      charIndex++

      if (charIndex === currentText.length) {
        // Selesai mengetik, jeda sebelum menghapus
        timeoutId = setTimeout(() => {
          isDeleting = true
          type()
        }, delayBetween)
      } else {
        timeoutId = setTimeout(type, typingSpeed)
      }
    } else {
      // Menghapus
      textRef.value.textContent = currentText.slice(0, charIndex)
      charIndex--

      if (charIndex < 0) {
        // Selesai menghapus, lanjut ke teks berikutnya
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length // Loop ke teks berikutnya
        charIndex = 0
        timeoutId = setTimeout(type, typingSpeed)
      } else {
        timeoutId = setTimeout(type, deletingSpeed)
      }
    }
  }

  type()
}

const typeSingleText = (text) => {
  clearAnimation() // Bersihkan animasi sebelumnya
  isTyping.value = true
  textRef.value.textContent = ''
  let index = 0

  const type = () => {
    if (index < text.length) {
      textRef.value.textContent = text.slice(0, index + 1)
      index++
      timeoutId = setTimeout(type, typingSpeed)
    } else {
      isTyping.value = false // Hentikan kursor untuk teks tunggal
      timeoutId = null
    }
  }
  type()
}

// Inisialisasi saat komponen dimounted
onMounted(() => {
  if (Array.isArray(props.text)) {
    typeArrayText(props.text)
  } else {
    typeSingleText(props.text)
  }
})

// Bersihkan animasi saat komponen di-unmount
onUnmounted(() => {
  clearAnimation()
})

// Pantau perubahan props.text atau locale
watch(
  [() => props.text, locale],
  ([newText]) => {
    if (Array.isArray(newText)) {
      typeArrayText(newText)
    } else {
      typeSingleText(newText)
    }
  },
  { deep: true },
)
</script>

<template>
  <span
    ref="textRef"
    :class="{
      'after:content-(--cursor) after:animate-cursor after:ml-1':
        isTyping && Array.isArray(props.text),
    }"
  ></span>
</template>

<style scoped></style>
