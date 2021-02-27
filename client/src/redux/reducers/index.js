import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {
    CreateCategoryReducer,
    FetchCategoryReducer,
    deleteCategoryReducer,
    FetchOneCategoryReducer,
} from "./categoryReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    createCategory: CreateCategoryReducer,
    allCategory: FetchCategoryReducer,
    deleteCategory: deleteCategoryReducer,
    oneCategory: FetchOneCategoryReducer,
});

export default rootReducer;
