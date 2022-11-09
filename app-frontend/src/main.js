import Vue from 'vue';
import '@/style.css';
import App from './App.vue';

//bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//bootstrap icon
import "bootstrap-icons/font/bootstrap-icons.css";

//import asset css
import '@/assets/layouts/vertical-light-menu/css/light/plugins.css';
import '@/assets/layouts/vertical-light-menu/css/dark/plugins.css';

//router
import router from "@/router";

//Vee-Validate
import VeeValidate from 'vee-validate';
import CustomValidator from "@/validation/custom-validator";
Vue.use(VeeValidate);
Vue.use(CustomValidator);

//vuex store
import store from "./store";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
