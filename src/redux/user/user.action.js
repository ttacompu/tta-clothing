import {UserActionTypes} from './user.type'

 export const setUser = (user) => ({type : UserActionTypes.SET_CURRENT_USER, payload : user });
    