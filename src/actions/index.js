import {ADD_MOVIES,REMOVE_MOVIES} from './actionTypes.js';

{
  type: ADD_MOVIES;
}

{
  type: REMOVE_MOVIES;
}

export function addMovies(Movies){

  //action creators / action typee
  return{
    type: ADD_MOVIES,
    Movies
  }
}