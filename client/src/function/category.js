import axios from "axios";

export const getCategory = async (slug) => {
    return axios.get(`${process.env.REACT_APP_API}/category/${slug}`);
};

export const removeCategory = async (slug, authtoken) => {
    return axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
        headers: { authtoken },
    });
};

export const updateCategory = async (slug,data,authtoken) => {
    axios.put(`${process.env.REACT_APP_API}/category/${slug}`,{name:data}, {
        headers: { authtoken },
    });
};

export const createCategory = async (data, authtoken) => {
    axios.post(`${process.env.REACT_APP_API}/category`,data, {
        headers: { authtoken },
    });
};


export const listCategory = async () => {
    return axios.get(`${process.env.REACT_APP_API}/category`);
};