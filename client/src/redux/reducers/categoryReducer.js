import {
    CREATE_CATEGORY_FAIL,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_REQUEST,
    FETCH_CATEGORY_FAIL,
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_REQUEST
} from "../type/categoryType";


export const CreateCategoryReducer = (state = {category:{}}, action) => {
    switch (action.type) {
        case CREATE_CATEGORY_REQUEST:
            return {
                loading: true,
            };

        case CREATE_CATEGORY_SUCCESS:
            return {
                loading: false,
                category: action.payload,
                success: true
            };

        case CREATE_CATEGORY_FAIL:
            return {
                laoding: false,
                error: action.payload,
            };

        default:
            return state;
    }
};


export const deleteCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_CATEGORY_REQUEST:
            return {
                loading: true,
            };

        case DELETE_CATEGORY_SUCCESS:
            return {
                loading: false,
                success: true,
            };

        case DELETE_CATEGORY_FAIL:
            return {
                laoding: false,
                error: action.payload,
            };

        default:
            return state;
    }
};



export const FetchCategoryReducer = (state = { allCategories: [] }, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST:
            return {
                loading: true,
                allCategories: [],
            };

        case FETCH_CATEGORY_SUCCESS:
            return {
                loading: false,
                allCategories: action.payload,
            };

        case FETCH_CATEGORY_FAIL:
            return {
                laoding: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
