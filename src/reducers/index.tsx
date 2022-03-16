import { combineReducers } from 'redux';
import { fetchDataReducer } from './fetch';
import { productsReducer } from './products';

const reducer = combineReducers({
  fetchData: fetchDataReducer,
  products: productsReducer,
});

export default reducer;
