export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_OF_FAVORITES = 'REMOVE_OF_FAVORITES';
export const FILTER = 'FILTER_CARDS';
export const ORDER = 'ORDER_CARDS';

const addToFavorites = (character) => {
  return { type: ADD_TO_FAVORITES, payload: character };
};

const removeOfFavorites = (id) => {
  return { type: REMOVE_OF_FAVORITES, payload: id };
};

const filterCards = (gender) => {
  return {  type: FILTER, payload: gender }
}

const orderCards = (value) => {
  return {  type: ORDER, payload: value }
}

export { addToFavorites, removeOfFavorites, filterCards, orderCards };