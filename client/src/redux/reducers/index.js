import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {CreateCategoryReducer} from './categoryReducer'



const rootReducer = combineReducers ({
    auth: authReducer,
    createCategory: CreateCategoryReducer
})

export default rootReducer;