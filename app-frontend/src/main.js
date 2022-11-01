import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import router from './router' //router

createApp(App)
.use(router)
.mount('#app')
