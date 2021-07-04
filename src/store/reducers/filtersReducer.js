import { FiltersTypes } from '../../constants';

const initialState = {
  sortBy: 'popular',
  category: null,
};

const FiltersReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case FiltersTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: payload.sortBy,
      };
    case FiltersTypes.SET_ACTIVE_CATEGORY:
      return {
        ...state,
        category: payload.category,
      };
    default:
      return state;
  }
};

export default FiltersReducer;
