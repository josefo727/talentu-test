import {calculateAge} from "../../functions/DateAndTime.js";

const usersGetters = {
    getUsers(state) {
        return state.users.map(user => {
            return {
                id: user.id,
                nombre: user.first_name + ' ' + user.last_name,
                edad: calculateAge(user.date_of_birth),
                email: user.email,
            }
        })
    }
}

export default usersGetters