import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import { Helmet } from 'react-helmet-async';

const AllMovies = () => {

    const data = useLoaderData();
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState(data);
    console.log(search);

    useEffect(() => {
        fetch(`http://localhost:5000/movie?searchParams=${search}`)
        .then(res => res.json())
        .then((data) => {
            setMovies(data);
        })
    }, [search])

    return (
        <div>
            <Helmet>
                <title>All Movie | MovieHub</title>
            </Helmet>
            <h1 className='text-center font-bold text-2xl pt-8'>All Movies</h1>

            <div className='w-6/12 mx-auto pt-8'>
                <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => setSearch(e.target.value)} 
                    name='search' type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            
            <div className="w-10/12 mx-auto pb-14 pt-16">
                <div className='gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    {
                        movies.map((movie) => <MovieCard
                        key={movie._id}
                        movie = {movie}>
                        </MovieCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllMovies;