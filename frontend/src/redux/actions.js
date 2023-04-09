export const GET_FAVORITES = 'GET_FAVORITES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_OF_FAVORITES = 'REMOVE_OF_FAVORITES';
export const FILTER = 'FILTER_CARDS';
export const ORDER = 'ORDER_CARDS';
const URL = 'https://rick-and-morty-react-api-jeffer.up.railway.app';

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
  fetch(`${URL}/api/v1/rickandmorty/fav`, {
    method: 'POST',
    headers: {  "Content-Type": "application/json" },
    body: JSON.stringify(character)
  })

  return { type: ADD_TO_FAVORITES, payload: character };
};

const removeOfFavorites = (id) => {
  fetch(`${URL}/api/v1/rickandmorty/fav/${id}`, {
    method: 'DELETE'
  })

  return { type: REMOVE_OF_FAVORITES, payload: id };
};

const filterCards = (gender) => {
  return {  type: FILTER, payload: gender }
}

const orderCards = (value) => {
  return {  type: ORDER, payload: value }
}

export { addToFavorites, removeOfFavorites, filterCards, orderCards, getFavorites };