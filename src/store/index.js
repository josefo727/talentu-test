import { createStore } from 'vuex'

import usersModule from './users/index'

const store = createStore({
    modules: {
        usersModule: usersModule
    }
})

export default store