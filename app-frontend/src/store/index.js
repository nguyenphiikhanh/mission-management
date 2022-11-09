import Vuex from  'vuex';
import Vue from "vue";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
//define state
import globalState from "./global";
import auth from './auth';

const store = new Vuex.Store({
    plugins:[
        createPersistedState()
    ],
    modules:{
        globalState,
        auth,
    }
});

export default store;