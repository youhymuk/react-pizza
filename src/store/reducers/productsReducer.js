import { ProductsTypes } from '../../constants';

const initialState = {
  productItems: Array(10).fill(0),
  isLoading: false,
};

const productsReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case ProductsTypes.SET_PRODUCTS:
      return {
        ...state,
        productItems: payload.products,
        isLoading: false,
      };
      case ProductsTypes.SET_LOADING:
        return {
          ...state,
          isLoading: true,
        };
    default:
      return state;
  }
};

export default productsReducer;
