import React from 'react';
import '../index.css';
import {addFavourites} from '../actions';
class MovieCard extends React.Component{

  handleFavouriteClick = () => {
    const {movie, isFavourite} = this.props;
    this.props.dispatch(movie);
  }
  handleUnFavouriteClick = () => {

  }
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
            <div className="rating">{movie.imdbRating}</div>
            {
              isFavourite ? <button className="unfavourite-btn" onClick={handleUnFavouriteClick}>UnFavorite</button> : <button className="favourite-btn" onClick={handleFavouriteClick}>Favorite</button>
            }
            
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCard;