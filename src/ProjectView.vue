<script setup>
import { ref } from 'vue'
import ProjectShowcases from './components/ProjectShowcases.vue'

const projectsUrl = '/projects.json'
let projects = []

const isProjectsLoaded = ref(false)

fetch(projectsUrl)
  .then((response) => response.json())
  .then((data) => {
    projects = data
    isProjectsLoaded.value = true
  })
  .catch((error) => {
    console.error('Error loading projects:', error)
  })
</script>

<template>
  <div class="w-full px-3 sm:px-6 md:px-10 lg:px-30 min-h-screen">
    <template v-if="isProjectsLoaded">
      <template v-for="project in projects.sort((a, b) => a.id - b.id)" :key="project.id">
        <ProjectShowcases :project="project" />
      </template>
    </template>
  </div>
</template>

<style scoped></style>
