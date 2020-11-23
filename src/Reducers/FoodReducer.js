import {
  GET_ALL_FOODS,
  SELECT_FOODS,
  GET_ALL_PANIER,
  DELETE_FOODS,
} from "../Action/types";


const initialState = {
  foods: [],
  panier: [],
};

export default function foodReducer(state = initialState, action) {
  if (action.type === GET_ALL_FOODS) {
    return {
      ...state,
      foods: action.payload,
    };
  }

  if (action.type === SELECT_FOODS) {
    console.log(action.payload);
    let x = Object(state.panier);
    return { ...state, panier: [action.payload, ...x] };
  }

  if (action.type === GET_ALL_PANIER) {
    return {
      ...state,
      panier: action.payload,
    };
  }
  if (action.type === DELETE_FOODS) {
    return {...state, panier: state.panier.filter((panier) => panier.id !== action.data)}
  }
  return state;
}
