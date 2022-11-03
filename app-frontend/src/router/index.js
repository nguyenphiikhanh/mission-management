import {createRouter,createWebHistory} from  'vue-router';


// import components
import Login from "../views/Login.vue";


const routes = [
    {
        path: '',
        redirect: 'login',
        meta: { guest: true }
    },
    {
        path: '/login',
        component: Login,
        meta: { guest: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;