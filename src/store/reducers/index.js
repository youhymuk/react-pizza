import { combineReducers } from 'redux';
import filters from './filtersReducer';
import products from './productsReducer';

const rootReducer = combineReducers({
  filters,
  products,
});

export default rootReducer;
