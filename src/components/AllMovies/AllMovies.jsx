import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

const AllMovies = () => {

    const movies = useLoaderData();
    return (
        <div>
            <h1>All Movies: {movies.length}</h1>
            {
                movies.map(movie => <MovieCard
                 key={movie._id}
                 movie = {movie}>
                </MovieCard>)
            }
        </div>
    );
};

export default AllMovies;