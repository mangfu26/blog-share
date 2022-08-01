import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from '@/router'
// 导入PrimeVue样式
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'


createApp(App).use(router).mount('#app')
