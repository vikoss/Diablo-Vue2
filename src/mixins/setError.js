import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations('error', {setError: 'SET_ERROR'}),
        setApiError(params) {
            this.setError(params)
        }
    }
}