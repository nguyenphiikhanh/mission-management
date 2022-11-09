import authServices from "../../services/authServices/index.js";

export default {
    async login({ dispatch, commit },data){
        commit('LOADING_ACTIVE',true)
        await authServices.login(data.usernameOrEmail,data.password)
            .then(response => {

            })
            .catch(error => {

                console.log('error');
            });
        commit('LOADING_ACTIVE',false,{ root: true })
    }
}