import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import "./Movie.css";

function Movie({id, year, title, summary, rating, poster, genres}) {
    return (
        <div className="movies_movie">
            <Link
            to={{
            pathname: `/movie/${id}`,
            state: {
                year,
                title,
                summary,
                rating,
                poster,
                genres
            }
            }}
        >
        <div className="movies_movie_poster">
            <img src={poster} alt={title} title={title}></img>
        </div>
        <h3 className="movies_movie_title">{title}</h3>
        <h5 className="movies_movie_year">{year}</h5>
        <ul className="movies_movie_genres">{genres.map((genre,index) => <li key={index} className="movies_movie_genre">{genre}</li>)}</ul>

        <h5 className="movies_movie_rating">Rating: {rating}</h5>
        <p className="movies_movie_summary">Description: {summary.slice(0,200)}...</p>
        </Link>
        </div>
    )
}


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;