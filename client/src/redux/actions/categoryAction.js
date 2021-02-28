import {
    CREATE_CATEGORY_FAIL,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_REQUEST,
    FETCH_CATEGORY_FAIL,
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_REQUEST,
    GETONE_CATEGORY_FAIL,
    GETONE_CATEGORY_REQUEST,
    GETONE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
} from "../type/categoryType";
import axios from "axios";

export const createCategoryAction = (category) => async (
    dispatch,
    getState
) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    const {
        auth: { token },
    } = getState();

    const config = {
        headers: {
            authtoken: token,
        },
    };

    try {
        const { data: newCategory } = await axios.post(
            `/api/v1/category`,
            category,
            config
        );
        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: newCategory });
    } catch (error) {
        dispatch({ type: CREATE_CATEGORY_FAIL, payload: error });
    }
};

export const removeCategoryAction = (slug) => async (dispatch, getState) => {
    dispatch({ type: DELETE_CATEGORY_REQUEST });
    const {
        auth: { token },
    } = getState();

    const config = {
        headers: {
            authtoken: token,
        },
    };

    try {
        await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`,config
        );
        dispatch({ type: DELETE_CATEGORY_SUCCESS });
    } catch (error) {
        dispatch({ type: DELETE_CATEGORY_FAIL, payload: error });
    }
};

export const getAllCategoryAction = () => async (dispatch) => {
    dispatch({ type: FETCH_CATEGORY_REQUEST });
    try {
        const { data: CategoryList } = await axios.get(
            `${process.env.REACT_APP_API}/category`
        );
        dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: CategoryList });
    } catch (error) {
        dispatch({ type: FETCH_CATEGORY_FAIL, payload: error });
    }
};

export const getOneCategoryAction = (slug) => async (dispatch) => {
    dispatch({ type: GETONE_CATEGORY_REQUEST });
    try {
        const { data: category } = await axios.get(
            `${process.env.REACT_APP_API}/category/${slug}`
        );
        dispatch({ type: GETONE_CATEGORY_SUCCESS, payload: category.category });
    } catch (error) {
        dispatch({ type: GETONE_CATEGORY_FAIL, payload: error });
    }
};

export const updateCategoryAction = (slug, data) => async (
    dispatch,
    getState
) => {
    dispatch({ type: UPDATE_CATEGORY_REQUEST });
    const {
        auth: { token },
    } = getState();

    const config = {
        headers: {
            authtoken: token,
        },
    };

    try {
        axios.put(
            `${process.env.REACT_APP_API}/category/${slug}`,
            { name: data },config

        );
        dispatch({ type: UPDATE_CATEGORY_SUCCESS });
    } catch (error) {
        dispatch({ type: UPDATE_CATEGORY_FAIL, payload: error });
    }
};
