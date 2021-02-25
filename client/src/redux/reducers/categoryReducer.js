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


export const CreateCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_CATEGORY_REQUEST:
            return {
                loading: true,
            };

        case CREATE_CATEGORY_SUCCESS:
            return {
                loading: false,
                success: true,
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



export const FetchSeedReducer = (state = { allSeed: [] }, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST:
            return {
                loading: true,
                allSeed: [],
            };

        case FETCH_CATEGORY_SUCCESS:
            return {
                loading: false,
                allSeed: action.payload,
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
