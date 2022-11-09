export default {
    authenticated: (state) => !!state.user,
    user: (state) => state.user,
}