import React from 'react';

class MovieCard extends React.Component{
  render(){
    const {movie} = this.props;
    return(
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie_poster"/>
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="raring">{movie.imdbRating}</div>
            <button className="favorite-btn">Favorite</button>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCard;