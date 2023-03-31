import {
  ADD_FAVORITE,
  CLEAN_DETAIL,
  GET_CHARACTER_DETAIL,
  GET_FAVORITES,
  FILTER,
  ORDER,
  REMOVE_FAVORITE,
} from "./actions";

const initialState = {
  myFavorites: [],
  characterDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };

    case GET_FAVORITES:
      return { ...state, myFavorites: action.payload };

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
