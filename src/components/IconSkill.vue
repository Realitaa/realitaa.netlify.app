<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
    default: 'html-5',
  },
  effect: {
    type: Boolean,
    required: false,
  },
  size: {
    required: false,
    default: 10,
  },
})

const size = `w-${props.size} h-${props.size}`
import { Icon } from '@iconify/vue'
const iconSkill = `logos:${props.icon}`
</script>

<template>
  <div
    class="border rounded-lg border-primary p-3"
    :class="{
      'opacity-50 hover:opacity-150': props.effect,
      'bg-transparent': props.effect,
      'bg-tertiary': !props.effect,
    }"
  >
    <Icon :icon="iconSkill" class="opacity-80" :class="size" />
  </div>
</template>
