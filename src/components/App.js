import React from "react";
import {data} from '../data';
import {Navbar,MovieCard} from './index.js';
import {ADD_MOVIES,REMOVE_MOVIES} from '../actions/actionTypes.js';
import addMovies from '../actions/index';
import '../index.css';

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      // console.log("updated");
      // this.forceUpdate();
    });
    //make an api call
    //dispatch an action
    store.dispatch(addMovies(data));
  }
  render(){
    const movies = this.props.store.getState();
    // console.log('render');
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>
          <div className="list">
            {movies.map((movie,index) => (<MovieCard key={`movie-${index}`} movie={movie}/>))}
          </div>
        </div>
      </div>
    );
  }

}

export default App;