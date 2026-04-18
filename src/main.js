import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styling/styles.css'

createApp(App).use(router).mount('#app')
