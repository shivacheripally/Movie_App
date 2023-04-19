import Reacr from 'react';
import {ADD_MOVIES,REMOVE_MOVIES} from '../actions/actionTypes.js';

export default function Movies(state = [],action){
  if(action.type === ADD_MOVIES){
    return action.movies;
  }
  else if(action.type === REMOVE_MOVIES){

  }

  return state;
}