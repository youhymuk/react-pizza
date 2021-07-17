import { ProductsTypes } from '../../constants';

export const setProducts = (products) => ({
  type: ProductsTypes.SET_PRODUCTS,
  payload: { products },
});

export const setLoading = () => ({
  type: ProductsTypes.SET_LOADING,
});
