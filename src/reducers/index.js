import { combineReducers } from 'redux';
import { fetchDataReducer } from './fetch';
import { productsReducer } from './products';
import { summaryReducer } from './summary';

const reducer = combineReducers({
  fetchData: fetchDataReducer,
  products: productsReducer,
  summary: summaryReducer,
});

export default reducer;
