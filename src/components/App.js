import React from "react";
import {data} from '../data';
import {Navbar,MovieCard} from './index.js';
import '../index.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>
        <div className="list">
          {data.map((movie,index) => (<MovieCard key={`movie-${index}`} movie={movie}/>))}
        </div>
      </div>
    </div>
  );
}
