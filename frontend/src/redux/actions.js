export const GET_FAVORITES = 'GET_FAVORITES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_OF_FAVORITES = 'REMOVE_OF_FAVORITES';
export const FILTER = 'FILTER_CARDS';
export const ORDER = 'ORDER_CARDS';
// const URL = 'https://rick-and-morty-react-api-jeffer.up.railway.app';
const URL = 'http://localhost:3001';

const getFavorites =  () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/api/v1/rickandmorty/fav`);
      const favorites = await response.json();
      return dispatch({ type: GET_FAVORITES, payload: favorites });
    } catch (error) {
      throw error.message;
    }
  }
}

const addToFavorites = (character) => {
  return async (dispatch) => {
    try {
      const { id, name, origin, status, image, species, gender} = character;
      const response = await fetch(`${URL}/api/v1/rickandmorty/fav`, {
      method: 'POST',
      headers: {  "Content-Type": "application/json" },
      body: JSON.stringify({ id_api: id, name, origin, status, image, species, gender})
      })
      const favorite = await response.json();
      return dispatch({ type: ADD_TO_FAVORITES, payload: favorite.data });
    } catch (error) {
      throw error.message;
    }
  }
};

const removeOfFavorites = (id) => {

  return async (dispatch) => {
    try {
      const deleted = await fetch(`${URL}/api/v1/rickandmorty/fav/${id}`, {
        method: 'DELETE'
      });
      return dispatch({ type: REMOVE_OF_FAVORITES, payload: id });
    } catch (error) {
      throw error.message;
    }
  }
};

const filterCards = (gender) => {
  return {  type: FILTER, payload: gender }
}

const orderCards = (value) => {
  return {  type: ORDER, payload: value }
}

export { addToFavorites, removeOfFavorites, filterCards, orderCards, getFavorites };