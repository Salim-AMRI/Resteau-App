import {
  GET_ALL_FOODS,
  SELECT_FOODS,
  GET_ALL_PANIER,
  DELETE_FOODS,
  PLUS_UN,
  MOINS_UN,
} from "../Action/types";
import calcReducer from "./index";

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
  // Nesting the reducers on PLUS_UN and MOINS_UN
  if ([PLUS_UN, MOINS_UN].includes(action.type)) {
    if (!action.payload.id) {
      return state;
    }

    const index = state.panier.findIndex(({ id }) => id === action.payload.id);
    // If not found, do nothing
    if (index === -1) {
      return state;
    }

    const elementsBefore = state.panier.slice(0, index);
    // There you have the nesting.
    const updatedElement = calcReducer(state.panier[index], action);
    const elementsAfter = state.panier.slice(index + 1);

    return {
      ...state,
      panier: [...elementsBefore, updatedElement, ...elementsAfter],
    };
  }
  return state;
}
