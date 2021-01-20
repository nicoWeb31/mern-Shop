import { LOGGED_IN_USER,LOGGED_OUT } from "../type/authType";

export const authReducer = (state = null, action) => {
    switch (action.type) {
        case LOGGED_IN_USER:
            return action.payload;

        case LOGGED_OUT : 
            return action.payload;

        default:
            return state;
    }
};
