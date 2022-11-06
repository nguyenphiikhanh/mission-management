import { createApp } from 'vue'
import './style.css'
import App from './App.vue';

//bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

//import asset css
import '@/assets/layouts/vertical-light-menu/css/light/plugins.css';
import '@/assets/layouts/vertical-light-menu/css/dark/plugins.css';


//router
import router from './router'

const app = createApp(App);
app.use(router);
app.mount('#app');
