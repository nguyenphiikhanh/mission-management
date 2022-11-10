import Vue from "vue";
//Toastify
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(Toast,{
    transition: "Vue-Toastification__fade",
    maxToasts: 1,
});

export default {
    alertSuccess( {commit}, payload){
        Vue.$toast.success(payload, {
            position: "top-center",
            timeout: 3000,
            closeOnClick: true,
            pauseOnFocusLoss: false,
            pauseOnHover: true,
            draggable: false,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: false,
            icon: false,
            rtl: false,
        });
    },

    alertError({ commit }, payload){
        Vue.$toast.error(payload, {
            position: "top-center",
            timeout: 3000,
            closeOnClick: true,
            pauseOnFocusLoss: false,
            pauseOnHover: true,
            draggable: false,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: false,
            icon: false,
            rtl: false,
        });
    }
}