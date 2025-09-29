import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import i18n from './i18n'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'

createApp(App).use(router).use(i18n).mount('#app')
