import Vuex from  'vuex';
import global from "./global/index.js";

const store = new Vuex({
    modules:{
        global,
    }
});

export default store;