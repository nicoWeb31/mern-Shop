import axios from 'axios';

export const createOrUpadateUser = async (authToken) => {
    const headers = {
        headers: {
            authtoken: authToken,
            toto: "toto",
        },
    };
    return await axios.post(
        `${process.env.REACT_APP_API}/users/create-or-update-user`,
        {},
        headers
    );
};


export const currentUser = async (authToken) => {
    const headers = {
        headers: {
            authtoken: authToken,
        },
    };
    return await axios.post(
        `${process.env.REACT_APP_API}/users/current-user`,
        {},
        headers
    );
};

export const currentAdmin = async (authToken) => {
    const headers = {
        headers: {
            authtoken: authToken,
        },
    };
    return await axios.post(
        `${process.env.REACT_APP_API}/users/current-admin`,
        {},
        headers
    );
};