import Axios from "axios";
import {
  ADD_USER,
  GET_ALL_PANIER,
  GET_ALL_FOODS,
  SELECT_FOODS,
  DELETE_FOODS,
  SUM_PANIER,
  TOT_PRIX,
  MOINS_UN,
  PLUS_UN,
  GET_ALL_USER,
} from "./types";

/* add  user */

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export function postUser(el) {
  return (dispatch) =>
    Axios.post(`http://localhost:3000/user`, {
      id: el.id,
      name: el.name,
      mail: el.mail,
      pass: el.pass,
    })
      .then((res) => dispatch(addUser(el)))
      .catch((err) => console.log(err));
}

/* afficher la nourriture */

export const getAllFoods = (payload) => ({
  type: GET_ALL_FOODS,
  payload: payload,
});

export function getFoodsFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3000/foods").then((res) =>
      dispatch(getAllFoods(res.data))
    );
}

/* ajouter au panier */

export const addToPanier = (payload) => ({
  type: SELECT_FOODS,
  payload,
});

export function selectFood(el) {
  return (dispatch) =>
    Axios.post(`http://localhost:3000/panier`, el)
      .then((res) => dispatch(addToPanier(el)))
      .catch((err) => console.log(err));
}

/* afficher le panier */

export const getAllPanier = (payload) => ({
  type: GET_ALL_PANIER,
  payload,
});

export function getPanierFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3000/panier").then((res) =>
      dispatch(getAllPanier(res.data))
    );
}

/* delete food */

export const deleteFoods = (payload) => ({
  type: DELETE_FOODS,
  payload,
});

export function deletePanierFromApi(id) {
  return (dispatch) =>
    Axios.delete("http://localhost:3000/panier/" + id).then((res) =>
      dispatch(getAllPanier())
    );
}

/* calcule de prix total */

export const sumPrice = (payload) => ({
  type: SUM_PANIER,
  payload,
});

/* calculer le prix */

export const totalPrice = (payload) => ({
  type: TOT_PRIX,
  payload,
});

export const plusUn = (payload) => ({
  type: PLUS_UN,
  payload,
});

/*
export function plusUn(el, id) {
  return (dispatch) =>
    Axios.patch("http://localhost:3000/panier" + id, el).then((res) => {
      {
        console.log(res.data);
        dispatch(plusun(el.data));
      }
    });
}
*/

export const moinsUn = (payload) => ({
  type: MOINS_UN,
  payload,
});

/*
export function moinsUn(el, id) {
  return (dispatch) =>
    Axios.patch("http://localhost:3000/panier" + id, el).then((res) => {
      {
        console.log(res.data);
        dispatch(moinsun(el.data));
      }
    });
}*/
// Get users

export const getAlluser = (payload) => ({
  type: GET_ALL_USER,
  payload,
});

export function GetUsersFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3000/user").then((res) => {
      dispatch(getAlluser(res.data));
      console.log(res.data);
    });
}
