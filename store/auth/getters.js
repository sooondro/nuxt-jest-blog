export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token
    },
    isAuthenticated(state) {
        return state.token != null;
    },
    userEmail(state) {
        return state.userEmail;
    }
}