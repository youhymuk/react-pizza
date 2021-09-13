import { CartTypes } from '../../constants';
import { getValue, getTotalSum } from '../../utils/helpers';

const initialState = {
  addedProducts: {},
  totalCount: 0,
  totalPrice: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => sum + obj.price, 0);


const cartReducer = (state = initialState, { type, payload = {} }) => {
  console.log(type, payload)
  switch (type) {
    case CartTypes.ADD_PRODUCT_TO_CART: {
      const currentProducts = state.addedProducts[payload.product.id]
        ? [...state.addedProducts[payload.product.id].items, payload.product]
        : [payload.product];

        console.log(currentProducts)

      const newProducts = {
        ...state.addedProducts,
        [payload.product.id]: {
          items: currentProducts,
          totalPrice: getTotalPrice(currentProducts),
        }
      }

      console.log(newProducts);

      const totalCount = getTotalSum(newProducts, 'items.length');
      const totalPrice = getTotalSum(newProducts, 'totalPrice');

      return {
        ...state,
        addedProducts: newProducts,
        totalCount,
        totalPrice,
      }
    }
    case CartTypes.CLEAR_CART:
      return {
        addedProducts: {},
        totalCount: 0,
        totalPrice: 0,
      }
    case CartTypes.REMOVE_CART_ITEM: {
      const newProducts = {
        ...state.addedProducts,
      }
      const currentTotalPrice = newProducts[payload.id].totalPrice;
      const currentTotalCount = newProducts[payload.id].items.length;
      delete newProducts[payload.id];

      return {
        addedProducts: newProducts,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      }
    }
    case CartTypes.PLUS_ITEM: {
      const newObjItems = [
        ...state.addedProducts[payload.id].items,
        state.addedProducts[payload.id].items[0]
      ];

      const newProducts = {
        ...state.addedProducts,
        [payload.id]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newProducts, 'items.length');
      const totalPrice = getTotalSum(newProducts, 'totalPrice');

      return {
        addedProducts: newProducts,
        totalCount,
        totalPrice,
      }
    }
    case CartTypes.MINUS_ITEM: {
      const oldItems = state.addedProducts[payload.id].items;
      const newObjItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;

      const newProducts = {
        ...state.addedProducts,
        [payload.id]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newProducts, 'items.length');
      const totalPrice = getTotalSum(newProducts, 'totalPrice');

      return {
        addedProducts: newProducts,
        totalCount,
        totalPrice,
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
