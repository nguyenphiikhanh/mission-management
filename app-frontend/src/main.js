import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//import asset css
import '@/assets/layouts/vertical-light-menu/css/light/plugins.css';
import '@/assets/layouts/vertical-light-menu/css/dark/plugins.css';

//router
import router from './router'

createApp(App)
.use(router)
.mount('#app')
