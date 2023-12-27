// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import postReducer from './postReducer';
import pageReducer from './pageReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  auth: authReducer,
  products: productReducer,
  posts: postReducer,
  cart: cartReducer,
  pages: pageReducer
});