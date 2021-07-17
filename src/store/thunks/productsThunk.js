import { fetchProducts } from '../../api';
import { setProducts } from '../actions';

export const getProducts = (category, sortBy) => {
  return async function (dispatch) {
    const data = await fetchProducts(category, sortBy);
    dispatch(setProducts(data));
  }
};
