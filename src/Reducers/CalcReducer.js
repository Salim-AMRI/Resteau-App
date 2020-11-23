import { PLUS_UN, MOINS_UN } from "../Action/types";

const initialState = {
  quantité: 1,
};

const calcReducer = (state = initialState, action) => {
  if (action.type === PLUS_UN) {
    return { quantité: state.quantité + 1 };
  } else if (action.type === MOINS_UN) {
    if (state.quantité > 1) {
      return { quantité: state.quantité - 1 };
    }
  }
  return state;
};

export default calcReducer;

/*

import { SUM_PANIER } from "../Action/types";

const initialState = {
  sum: 0,
};

const calcReducer = (state = initialState, action) => {
  if (action.type === SUM_PANIER) {
    return { sum: state.sum };
  }
  return state;
};

export default calcReducer;

*/
