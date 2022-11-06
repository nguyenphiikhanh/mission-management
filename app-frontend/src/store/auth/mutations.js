export default {
    SET_AUTHENTICATE(state, val){
        state.isAuthenticated = val;
    },
    SET_USER(state, user){
        state.user = user;
    }
}