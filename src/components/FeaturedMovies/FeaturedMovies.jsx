import { Link, useLoaderData } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

const FeaturedMovies = () => {

    const movies = useLoaderData();

    return (
        <div>
            <h1 className='text-center text-2xl font-semibold'>Featured Movies</h1> 
            <div className="w-10/12 mx-auto pb-14 pt-16">
                <div className='gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    {
                        movies.map(movie => <MovieCard
                        key={movie._id}
                        movie = {movie}>
                        </MovieCard>)
                    }
                </div>
            </div>
            <div className="flex justify-center">
                <Link to="/allmovies">
                    <button className="btn btn-outline btn-error">See all movies</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedMovies;