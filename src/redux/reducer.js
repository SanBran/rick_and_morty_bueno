import { ADD_FAVORITE, FILTER, ORDER, REMOVE_FAVORITE } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    case FILTER:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

    case ORDER:
      if (action.payload === "Ascendente") {
        return { ...state, myFavorites: state.allCharacters.sort };
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
