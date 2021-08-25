import { CartTypes } from '../../constants';

export const addProduct = (product) => ({
  type: CartTypes.ADD_PRODUCT_TO_CART,
  payload: { product },
});
