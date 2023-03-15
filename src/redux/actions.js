export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_OF_FAVORITES = 'REMOVE_OF_FAVORITES';

const addToFavorites = (character) => {
  return { type: ADD_TO_FAVORITES, payload: character };
};

const removeOfFavorites = (id) => {
  return { type: REMOVE_OF_FAVORITES, payload: id };
};

export { addToFavorites, removeOfFavorites };