import authServices from "../../services/authServices/index.js";
import message from "../../constants/message";

export default {
    async login({ dispatch, commit },data){
        commit('LOADING_ACTIVE',true,{ root: true });
        await authServices.login(data.usernameOrEmail,data.password)
            .then(response => {

            })
            .catch(error => {
                dispatch("alertError",message.default,{root: true});
            });
        commit('LOADING_ACTIVE',false,{ root: true })
    }
}