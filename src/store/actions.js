// example
import { ADDITION, SUBTRACTION } from './actionTypes';

import { fetchAll } from './actionTypes';

// example
export const addition = () => ({
  type: ADDITION,
});
export const subtraction = () => ({
  type: SUBTRACTION,
});

export const fetchAllRecipes = () => ({
  type: fetchAll,
});
