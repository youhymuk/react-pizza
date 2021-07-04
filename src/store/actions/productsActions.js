import { ProductsTypes } from '../../constants';

export const setProducts = (products) => ({
  type: ProductsTypes.SET_PRODUCTS,
  payload: { products },
});
