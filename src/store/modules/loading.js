export default {
    namespaced: true,
    state: {
        isLoading: false
    },
    mutations: {
        SET_LOADING(state, loading) {
            state.isLoading = loading
        }
    }
}