// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import postReducer from './postReducer';
import pageReducer from './pageReducer';

export default combineReducers({
  auth: authReducer,
  products: productReducer,
  posts: postReducer,
  pages: pageReducer
});