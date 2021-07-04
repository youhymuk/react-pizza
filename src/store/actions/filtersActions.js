import { FiltersTypes } from '../../constants';

export const setSortBy = (sortBy) => ({
  type: FiltersTypes.SET_SORT_BY,
  payload: { sortBy },
});

export const setActiveCategory = (category) => ({
  type: FiltersTypes.SET_ACTIVE_CATEGORY,
  payload: { category },
});
