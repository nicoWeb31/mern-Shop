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

export const removeCategoryAction = (id) => async (dispatch) => {
    dispatch({ type: DELETE_CATEGORY_REQUEST });
    try {
        await removeCategory(id);
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
