import axios from "axios";

export const getCategory = async (slug) => {
    axios.get(`${process.env.REACT_APP_API}/category/${slug}`);
};

export const removeCategory = async (slug, authtoken) => {
    axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
        headers: { authtoken },
    });
};

export const updateCategory = async (slug, authtoken) => {
    axios.put(`${process.env.REACT_APP_API}/category/${slug}`, {
        headers: { authtoken },
    });
};

export const createCategory = async (data, authtoken) => {
    axios.post(`${process.env.REACT_APP_API}/category`,data, {
        headers: { authtoken },
    });
};


export const listCategory = async () => {
    axios.get(`${process.env.REACT_APP_API}/category`);
};