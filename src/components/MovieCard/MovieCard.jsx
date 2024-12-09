import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {

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
                    <p>{genre}</p>
                    <p>Release Year: {year}</p>
                    <p>{rating}</p>
                    <p>Time: {duration}</p>

                    <div className="card-actions justify-end">
                        <Link to={`movie/${_id}`}>
                            <button className="btn font-semibold text-lg rounded-full  hover:bg-[#E50914] bg-[#b70c14] text-white">See Details</button>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default MovieCard;