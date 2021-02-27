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
} from "../type/categoryType";
import axios from "axios";
import {
    removeCategory,
    getCategory,
    listCategory,
} from "../../function/category";

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

export const removeCategoryAction = (slug) => async (dispatch,getState) => {
    dispatch({ type: DELETE_CATEGORY_REQUEST });
    const {
        auth: { token },
    } = getState();

    try {
        await removeCategory(slug,token);
        dispatch({ type: DELETE_CATEGORY_SUCCESS });
    } catch (error) {
        dispatch({ type: DELETE_CATEGORY_FAIL, payload: error });
    }
};

export const getAllCategoryAction = () => async (dispatch) => {
    dispatch({ type: FETCH_CATEGORY_REQUEST });
    try {
        const { data: CategoryList } = await listCategory();
        dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: CategoryList });
    } catch (error) {
        dispatch({ type: FETCH_CATEGORY_FAIL, payload: error });
    }
};


export const getOneCategoryAction = (slug) => async (dispatch) => {
    dispatch({ type: GETONE_CATEGORY_REQUEST });
    try {
        const { data: Category } = await getCategory(slug);
        dispatch({ type: GETONE_CATEGORY_SUCCESS, payload: Category });
    } catch (error) {
        dispatch({ type: GETONE_CATEGORY_FAIL, payload: error });
    }
};
