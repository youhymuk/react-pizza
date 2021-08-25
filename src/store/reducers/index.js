import { combineReducers } from 'redux';
import filters from './filtersReducer';
import products from './productsReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
  filters,
  products,
  cart,
});

export default rootReducer;
