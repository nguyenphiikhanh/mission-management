import Vue from 'Vue';
import VueRouter from 'vue-router';
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/login',
        meta: { gusest: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { gusest: true }
    }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;