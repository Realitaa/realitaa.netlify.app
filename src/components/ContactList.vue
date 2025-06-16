<script setup>
import { Icon } from '@iconify/vue'
const { icon, name, link } = defineProps(['icon', 'name', 'link'])
const iconContact = `logos:${icon}`
</script>

<template>
  <a
    :href="link"
    class="flex align-middle border rounded-lg border-primary p-3 relative overflow-hidden group"
  >
    <span
      class="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"
    ></span>
    <span class="relative flex items-center">
      <Icon :icon="iconContact" class="w-10 h-10 ms-1" />
      <h3 class="font-bold text-xl text-slate-300 text-center m-auto ms-3">{{ name }}</h3>
    </span>
  </a>
</template>
