import {readFromLocalStorage} from '../../functions/LocalStorage.js';

const usersActions = {
    async initialLoadUsers(context, reset = false) {
        let users = !reset ? readFromLocalStorage('users') : null;
        if (!users) {
            let response = await fetch('https://reqres.in/api/users?page=1');
            response = await response.json();
            users = await response.data
        }
        context.commit('SET_USERS', users);
    },
    async addUser(context, payload) {
        const ID = parseInt([...context.state.users]?.pop()?.id) + 1;
        const user = {
            id: ID,
            email: payload.email,
            first_name: payload.first_name,
            last_name: payload.last_name,
            date_of_birth: payload.date_of_birth,
            avatar: `https://reqres.in/img/faces/${ID}-image.jpg`,
        }
        context.commit('ADD_USER', user);
    },
}

export default usersActions