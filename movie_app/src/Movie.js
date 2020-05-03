import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({year, title, summary, rating, poster, genres}) {
    return (<div className="movies_movie">
        <div className="movies_movie_poster">
            <img src={poster} alt={title} title={title}></img>
        </div>
        <h3 className="movies_movie_title">{title}</h3>
        <h5 className="movies_movie_year">{year}</h5>
        <ul className="movies_movie_genres">{genres.map((genre,index) => <li key={index} className="movies_movie_genre">{genre}</li>)}</ul>

        {/* <h5 className="movies_movie_rating">{rating}</h5> */}
        <p className="movies_movie_summary">{summary}</p>
    </div>)
}


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    // rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;