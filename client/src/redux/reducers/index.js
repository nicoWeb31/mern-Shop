import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {
    CreateCategoryReducer,
    FetchCategoryReducer,
    deleteCategoryReducer,
    FetchOneCategoryReducer,
    updateCategoryReducer,
} from "./categoryReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    createCategory: CreateCategoryReducer,
    allCategory: FetchCategoryReducer,
    deleteCategory: deleteCategoryReducer,
    oneCategory: FetchOneCategoryReducer,
    updateCategory: updateCategoryReducer,
});

export default rootReducer;
