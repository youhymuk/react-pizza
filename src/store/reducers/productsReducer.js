import { ProductsTypes } from '../../constants';

const initialState = {
  productItems: [],
};

const productsReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case ProductsTypes.SET_PRODUCTS:
      return {
        ...state,
        productItems: payload.products,
      };
    default:
      return state;
  }
};

export default productsReducer;
