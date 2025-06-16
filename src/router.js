import { createWebHistory, createRouter } from 'vue-router'
import { ref } from 'vue'

import HomeView from './HomeView.vue'
import AchievementView from './AchievementView.vue'
import ProjectView from './ProjectView.vue'
// import HobbyView from './HobbyView.vue'
import NotFound from './NotFound.vue'

export const isLoading = ref(false)

const routes = [
  { path: '/', component: HomeView },
  { path: '/project', component: ProjectView },
  { path: '/achievement', component: AchievementView },
  // { path: '/hobby', component: HobbyView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
  linkActiveClass: 'bg-primary md:text-primary',
})

router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

export default router
