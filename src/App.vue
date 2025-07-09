<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t, locale } = useI18n({ useScope: 'global' })
const changeLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}

let toggleNavbar = ref(false)
let toggleDropdown = ref(false)
const navbarRef = ref(null)

const handleOutsideClick = (event) => {
  if (navbarRef.value && !navbarRef.value.contains(event.target)) {
    toggleNavbar.value = false
  }
}

// Tentukan apakah FAB harus ditampilkan berdasarkan nama rute
const route = useRoute()
const showFAB = computed(() => route.name !== 'home')

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)

  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    changeLocale(savedLocale)
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})
</script>

<template>
  <nav ref="navbarRef" class="bg-slate-900 fixed w-full z-20 top-0 start-0 border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3">
        <span class="self-center text-2xl font-semibold whitespace-nowrap">Realitaa</span>
      </a>
      <div class="flex space-x-3 md:space-x-0">
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary text-gray-400"
          @click="toggleNavbar = !toggleNavbar"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        :class="{ hidden: !toggleNavbar }"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-primary rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 bg-gray-800 md:dark:bg-slate-900"
        >
          <li>
            <RouterLink
              to="/"
              class="block py-2 px-3 text-white rounded-sm md:bg-transparent hover:text-primary md:p-0"
              @click="toggleNavbar = !toggleNavbar"
              >{{ t('nav.home') }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/project"
              class="block py-2 px-3 text-white rounded-sm md:bg-transparent hover:text-primary md:p-0"
              @click="toggleNavbar = !toggleNavbar"
              >{{ t('nav.projects') }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/achievement"
              class="block py-2 px-3 text-white rounded-sm md:bg-transparent hover:text-primary md:p-0"
              @click="toggleNavbar = !toggleNavbar"
              >{{ t('nav.achievements') }}</RouterLink
            >
          </li>
          <!-- <li>
            <RouterLink
              to="/hobby"
              class="block py-2 px-3 text-white rounded-sm md:bg-transparent hover:text-primary md:p-0"
              @click="toggleNavbar = !toggleNavbar"
              >{{ t('nav.hobby') }}</RouterLink
            >
          </li> -->
          <li>
            <button
              id="language"
              class="rounded-lg hidden md:inline-flex items-center cursor-pointer"
              type="button"
              @click="toggleDropdown = !toggleDropdown"
            >
              <div v-if="locale == 'en'">
                <Icon icon="twemoji:flag-for-flag-united-states" class="text-2xl" />
              </div>
              <div v-else>
                <Icon icon="twemoji:flag-indonesia" class="text-2xl" />
              </div>
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdown"
              class="mt-5 md:mt-0 md:absolute md:right-4 z-10 rounded-lg shadow-sm md:w-44 bg-gray-700"
              :class="{ 'md:hidden': !toggleDropdown }"
            >
              <ul class="flex flex-row md:flex-col justify-around py-2 text-gray-200">
                <li
                  class="flex items-center gap-2 p-2 cursor-pointer"
                  :class="locale == 'en' ? 'bg-gray-800' : 'hover:bg-gray-800'"
                  @click="(changeLocale('en'), (toggleDropdown = false), (toggleNavbar = false))"
                >
                  <Icon icon="twemoji:flag-for-flag-united-states" class="text-lg" />
                  <span>English</span>
                </li>
                <li
                  class="flex items-center gap-2 p-2 cursor-pointer"
                  :class="locale == 'id' ? 'bg-gray-800' : 'hover:bg-gray-800'"
                  @click="(changeLocale('id'), (toggleDropdown = false), (toggleNavbar = false))"
                >
                  <Icon icon="twemoji:flag-indonesia" class="text-lg" /> <span>Indonesia</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView class="mt-30" />

  <a
    v-if="showFAB"
    href="/#contact"
    class="fixed bottom-5 md:bottom-8 right-5 md:right-8 p-2 rounded-full bg-primary"
  >
    <Icon icon="foundation:telephone" class="text-4xl md:text-5xl animate-phone-ringing" />
  </a>
</template>

<style scoped></style>
