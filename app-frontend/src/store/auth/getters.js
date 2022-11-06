export default {
    authenticated: (state) => {
        return state.user;
    },
    user: (state) => {
        return state.isAuthenticated;
    }
}