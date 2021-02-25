import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {CreateCategoryReducer, FetchCategoryReducer, deleteCategoryReducer} from './categoryReducer'



const rootReducer = combineReducers ({
    auth: authReducer,
    createCategory: CreateCategoryReducer,
    allCategory: FetchCategoryReducer,
    deleteCategory: deleteCategoryReducer
    
})

export default rootReducer;