import { CartTypes } from '../../constants';

export const addProduct = (product) => ({
  type: CartTypes.ADD_PRODUCT_TO_CART,
  payload: { product },
});

export const clearCart = () => ({
  type: CartTypes.CLEAR_CART,
});

export const removeCartItem = (id) => ({
  type: CartTypes.REMOVE_CART_ITEM,
  payload: { id },
});

export const plusItem = (id) => ({
  type: CartTypes.PLUS_ITEM,
  payload: { id },
});

export const minusItem = (id) => ({
  type: CartTypes.MINUS_ITEM,
  payload: { id },
});
