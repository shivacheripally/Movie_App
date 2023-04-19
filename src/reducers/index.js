import Reacr from 'react';
import {ADD_MOVIES,REMOVE_MOVIES} from '../actions/actionTypes.js';

const intialMoviesState = {
  list:[],
  favorites:[]
}

export default function Movies(state = intialMoviesState,action){
  if(action.type === ADD_MOVIES){
    return {
      ...state,
      list:action.Movies
    };
  }
  else if(action.type === REMOVE_MOVIES){

  }

  return state;
}