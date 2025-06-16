<script setup>
defineProps(['time', 'title', 'description'])
</script>

<template>
  <li class="mb-10 ms-4">
    <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5"></div>
    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
      time
    }}</time>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
      {{ title }}
    </h3>
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      {{ description }}
    </p>
  </li>
</template>
