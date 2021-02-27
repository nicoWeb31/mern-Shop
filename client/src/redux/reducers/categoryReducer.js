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
    UPDATE_CATEGORY_RESTET
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


export const FetchOneCategoryReducer = (state = { category: {} }, action) => {
    switch (action.type) {
        case GETONE_CATEGORY_REQUEST:
            return {
                loading: true,
                category: {},
            };

        case GETONE_CATEGORY_SUCCESS:
            return {
                loading: false,
                category: action.payload,
            };

        case GETONE_CATEGORY_FAIL:
            return {
                laoding: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export const updateCategoryReducer = (state = {category: {}}, action) => {
    switch (action.type) {
        case UPDATE_CATEGORY_REQUEST:
            return {
                loading: true,
                category:{}
            };

        case UPDATE_CATEGORY_SUCCESS:
            return {
                loading: false,
                success: true,
                category:{}
            };

        case UPDATE_CATEGORY_FAIL:
            return {
                laoding: false,
                error: action.payload,
            };


            case UPDATE_CATEGORY_RESTET:
                return {
                    category:{}
                };
        

        default:
            return state;
    }
};