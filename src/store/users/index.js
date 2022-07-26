import usersGetters   from './getters'
import usersActions   from './actions'
import usersMutations from './mutations'

const usersModule = {
    namespaced: true,
    state() {
        return {
            users: []
        }
    },
    getters:   usersGetters,
    actions:   usersActions,
    mutations: usersMutations
}

export default usersModule