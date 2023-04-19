import {ADD_MOVIES,FAVOURITE_MOVIES,REMOVE_MOVIES} from './actionTypes.js';

export function addMovies(movies){
  return{
    type: ADD_MOVIES,
    movies
  }
}

export function addFavourites(movie){
  return{
    type: FAVOURITE_MOVIES,
    movie
  }
}