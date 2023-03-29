import { 
  GET_FAVORITES,
  ADD_TO_FAVORITES, 
  REMOVE_OF_FAVORITES,
  FILTER,
  ORDER 
} from "./actions"

const initialState = {
  myFavorites: [],
  allCharacters: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [  ...state.allCharacters, action.payload ]

      };
    case REMOVE_OF_FAVORITES:
      return {
        ...state,
        myFavorites: [ ...state.allCharacters.filter(
          (item) => item.id !== action.payload
        )],
        allCharacters: [ ...state.allCharacters.filter(
          (item) => item.id !== action.payload
        )],
      };
    case FILTER:
      const allCharacters = [...state.allCharacters];
      const filter = allCharacters.filter(character => character.gender === action.payload)
      return {
        ...state,
        myFavorites: filter
      }
    case ORDER:
      const AllCharacters = [...state.allCharacters];
      let sort;
      if(action.payload == "Ascendente"){
        sort = AllCharacters.sort((a, b) => a.id - b.id);
      } else {
        sort = AllCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: sort
      }
      

    default:
      return {
        ...state,
      };
  }
}

export { rootReducer };