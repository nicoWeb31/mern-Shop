import {LOGGED_IN_USER, LOGGED_OUT} from '../type/authType'

export const loginUser = (data) =>{
    return {
        type: LOGGED_IN_USER,
        payload: data
    }
}

export const logoutUser = () =>{
    return {
        type: LOGGED_OUT,
        payload: null
    }
}