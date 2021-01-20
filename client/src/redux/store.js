import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //for devtools
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const middleware = [thunk];
const store = createStore(rootReducer,{}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;