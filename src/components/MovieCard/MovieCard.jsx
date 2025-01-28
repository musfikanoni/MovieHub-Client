import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const MovieCard = ({movie}) => {

    const { user, signOutUser } = useContext(AuthContext);


    const {_id, poster, title, genre, year, duration, rating, summary} = movie;
    return (
            <div className="flex justify-between">
                <div className="">
                <div className="card card-compact bg-base-100 w-full shadow-xl">
                <figure>
                    <img
                    src={poster}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='font-bold text-md'>{genre}</p>
                    <p><span className='font-bold text-lg'>Release Year:</span> <span className='text-lg font-semibold'>{year}</span> </p>
                    <p className='flex items-center'><span className='font-bold text-lg'>Rating: </span> <span className='text-lg font-semibold pl-3'>{rating} </span> <img className='h-6' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" /> </p>
                    <p><span className='font-bold text-lg'>Time:</span> <span className='text-lg font-semibold'>{duration}</span> </p>

                    <div className="card-actions justify-end">
                        {
                            user && <>
                             <Link to={`/seeDetails/${_id}`}>
                                <button className="btn font-semibold text-lg rounded-full  hover:bg-[#E50914] bg-[#b70c14] text-white">See Details</button>
                            </Link>
                            </>
                        }
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default MovieCard;