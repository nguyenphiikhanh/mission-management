import {createRouter,createWebHistory} from  'vue-router';
import title from "../constants/tittle.js";

// import components
import Login from "@/views/Login.vue";
import ResetPassword from '@/views/ResetPassword.vue';


const routes = [
    // guest router
    {
        path: '',
        redirect: 'login',
    },
    {
        path: '/login',
        component: Login,
        meta: {
            middleware: 'guest',
            title: title.root_title,
        }
    },
    {
        path: '/password-reset',
        component: ResetPassword,
        meta: {
            middleware: 'guest',
            title: title.root_title,
        }
    }

    //authServices router
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
//
router.beforeEach((to, from, next) =>{
    document.title = `${to.meta.title}`;
    next();
});

export default router;