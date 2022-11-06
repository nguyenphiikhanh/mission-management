import authServices from "../../services/authServices/index.js";

export default {
    async login({ dispatch, commit},data){
        commit('LOADING_ACTIVE',true)
        await authServices.login(data.usernameOrEmail,data.password)
            .then(response => {
                commit('SET_AUTHENTICATE',true);
            })
            .catch(error => {

                commit('SET_AUTHENTICATE',false);
            });
        commit('LOADING_ACTIVE',false)
    }
}