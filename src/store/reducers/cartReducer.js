import { CartTypes } from '../../constants';

const initialState = {
  addedProducts: {},
  totalCount: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case CartTypes.ADD_PRODUCT_TO_CART: {
      const newProducts = {
            ...state.addedProducts,
            [payload.product.id]: state.addedProducts[payload.product.id]
                ? [...state.addedProducts[payload.product.id], payload.product]
                : [payload.product],
        };
      const allProducts = [].concat.apply([], Object.values(newProducts));
      const totalPrice = allProducts.reduce((sum, product) => sum + product.price, 0)

      return {
        ...state,
        addedProducts: newProducts,
        totalCount: allProducts.length,
        totalPrice,
      }
    }

    default:
        return state;
  }
};

export default cartReducer;
