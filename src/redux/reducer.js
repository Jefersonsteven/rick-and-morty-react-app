import { ADD_TO_FAVORITES, REMOVE_OF_FAVORITES } from "./actions"

const initialState = {
  myFavorites: []
}

function rootReducer(state = initialState, action) {
  switch(action.type){
    case ADD_TO_FAVORITES:
      return {
        ...state,
        myFavorites: [ ...myFavorites, action.payload ]
      }
    case REMOVE_OF_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(item => item.id !== action.payload)
      }
    default:
      return {
        ...state
      }
  }
}

export { rootReducer };