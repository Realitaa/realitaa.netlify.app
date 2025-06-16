<script>
import { ref } from 'vue'

export default {
  name: 'LoadingBar',
  setup() {
    const isLoading = ref(false)
    return { isLoading }
  },
}
</script>

<template>
  <div
    v-if="isLoading"
    class="fixed top-0 left-0 w-full h-1 bg-blue-500 z-50"
    :class="{ 'animate-loading': isLoading }"
  ></div>
</template>

<style scoped>
.animate-loading {
  animation: loading 2s infinite;
}

@keyframes loading {
  0% {
    width: 0;
  }
  50% {
    width: 60%;
  }
  100% {
    width: 100%;
  }
}
</style>
