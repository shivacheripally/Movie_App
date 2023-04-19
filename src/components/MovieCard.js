import React from 'react';

class MovieCard extends React.Component{
  render(){
    const {movie} = this.props;
    return(
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie_poster"/>
        </div>
        <div className="right"></div>
      </div>
    )
  }
}

export default MovieCard;