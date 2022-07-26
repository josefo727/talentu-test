import {getRandomDate} from '../../functions/DateAndTime.js';
import {writeInLocalStorage} from "../../functions/LocalStorage.js";

const usersMutations = {
    SET_USERS(state, payload) {
        state.users = payload?.map(user => {
            return {
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                date_of_birth: user.date_of_birth ?? getRandomDate(),
                avatar: user.avatar ?? `https://reqres.in/img/faces/${user.id}-image.jpg`,
            };
        }) ?? []
    },
    ADD_USER(state, payload) {
        state.users.push(payload);
        writeInLocalStorage('users', state.users)
    }
}

export default usersMutations