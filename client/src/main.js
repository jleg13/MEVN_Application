import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/main.scss'
import '@/assets/fonts/shockwave/shockwave.css'
import FontAwesomeIcon from '@/assets/fonts/font-awesome/fontAwesomeIcons'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
