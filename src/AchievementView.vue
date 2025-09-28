<script setup>
import { ref } from 'vue'
const certificatesUrl = '/certificates/certificates.json'
let certificates = []
import GlideCertificate from './components/GlideCertificate.vue'

const isCertificateLoaded = ref(false)

fetch(certificatesUrl)
  .then((response) => response.json())
  .then((data) => {
    certificates = data
    isCertificateLoaded.value = true
  })
  .catch((error) => {
    console.error('Error loading certificates:', error)
  })
</script>

<template>
  <div class="w-full px-3 sm:px-6 md:px-10 lg:px-30 min-h-screen">
    <!-- Menampilkan sertifikat -->
    <template v-if="isCertificateLoaded">
      <template v-for="cert in certificates.sort((a, b) => a.id - b.id)" :key="cert.id">
        <GlideCertificate :title="cert.name" :certificates="cert.certificate_list" />
      </template>
    </template>
  </div>
</template>
