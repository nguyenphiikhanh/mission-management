import Vuex from  'vuex';
import global from "./global";
import auth from './auth'

const store = new Vuex.Store({
    modules:{
        global,
        auth,
    }
});

export default store;