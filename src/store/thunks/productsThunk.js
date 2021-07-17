import { fetchProducts } from '../../api';
import { setProducts, setLoading } from '../actions';

export const getProducts = (category, sortBy) => {
  return async function (dispatch) {
    dispatch(setLoading());
    const data = await fetchProducts(category, sortBy);
    dispatch(setProducts(data));
  }
};
