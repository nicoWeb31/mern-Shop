import { LOGGED_IN_USER, LOGGED_OUT } from "../type/authType";
import { createOrUpadateUser } from "../../function/auth";
import { currentUser } from '../../function/auth'

// export const loginUser = (data) =>{
//     return {
//         type: LOGGED_IN_USER,
//         payload: data
//     }
// }

export const CurrentUser = (idTokenResult) => async (dispatch) => {
    try {
        const result = await currentUser(idTokenResult.token);
        const data = {
            name: result.data.user.name,
            email: result.data.user.email,
            token: idTokenResult.token,
            role: result.data.user.role,
            _id: result.data.user._id,
        };

        dispatch({
            type: LOGGED_IN_USER,
            payload: data,
        });
    } catch (error) {
        console.log(error)
    }
};

export const loginUser = (idTokenResult) => async (dispatch) => {
    try {
        const result = await createOrUpadateUser(idTokenResult.token);
        const data = {
            name: result.data.user.name,
            email: result.data.user.email,
            token: idTokenResult.token,
            role: result.data.user.role,
            _id: result.data.user._id,
        };

        dispatch({
            type: LOGGED_IN_USER,
            payload: data,
        });
    } catch (error) {
        console.log(error)
    }
};

export const logoutUser = () => {
    return {
        type: LOGGED_OUT,
        payload: null,
    };
};
