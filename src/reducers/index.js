import Reacr from 'react';
import { ADD_MOVIES,FAVOURITE_MOVIES, REMOVE_MOVIES } from '../actions/actionTypes.js';

const intialMoviesState = {
  list: [],
  favorites: [],
};

export default function Movies(state = intialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.Movies
      };
    case FAVOURITE_MOVIES:
      return {
        ...state,
        favorites:[action.movie, ...state.favorites]
      };
    default:
      return state;
  }
}
