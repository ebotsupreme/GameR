// example
import { ADDITION, SUBTRACTION } from './actionTypes';

import { fetchAll } from './actionTypes';

const initialState = {
  // example
  counter: 0,

  featured: [],
  trending: [],
  holiday: [],
  popular: [],
  recent: [],
  allRecipes: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // example
    case ADDITION:
      return { ...state, counter: state.counter + 1 };
    // example
    case SUBTRACTION:
      return { ...state, counter: state.counter - 1 };
    case fetchAll:
      return { ...state, allRecipes: state.allRecipes };

    default:
      return state;
  }
};
