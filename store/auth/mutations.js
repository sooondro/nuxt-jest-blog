import { state } from "..";

export default {
    setToken(state, token) {
        state.token = token;
    },
    setUserId(state, id) {
        state.userId = id;
    },
    setUserEmail(state, email) {
        state.userEmail = email;
    },
    clearToken(state) {
        state.token = null;
    },
    clearUserEmail(state) {
        state.userEmail = null;
    },
    clearUserId(state) {
        state.userId = null;
    },
    clearAuthData(state) {
        state.token = null;
        state.userEmail = null;
        state.userId = null;
    }
}