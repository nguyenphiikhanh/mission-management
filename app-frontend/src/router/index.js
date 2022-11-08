import VueRouter from "vue-router";
import title from "../constants/tittle.js";
import Vue from "vue";

// import components
import Login from "@/views/Login.vue";
import ResetPassword from '@/views/ResetPassword.vue';

Vue.use(VueRouter);

const routes = [
    // guest router
    {
        path: '',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            middleware: 'guest',
            title: title.root_title,
        }
    },
    {
        path: '/password-reset',
        name: 'ResetPassword',
        component: ResetPassword,
        meta: {
            middleware: 'guest',
            title: title.root_title,
        }
    }

    //authServices router
];

const router = new VueRouter({
    mode: "history",
    routes
});
//
router.beforeEach((to, from, next) =>{
    document.title = `${to.meta.title}`;
    next();
});

export default router;