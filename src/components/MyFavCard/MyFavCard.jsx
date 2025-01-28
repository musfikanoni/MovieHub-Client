import React from 'react';
import Swal from 'sweetalert2';

const MyFavCard = ({ fav, onDelete }) => {
    const { _id, poster, title, genre, year, duration, rating } = fav;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myfavorites/${_id}`, {
                    method: 'DELETE',
                })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: `${title} has been deleted.`,
                            icon: 'success',
                        });
                        onDelete(_id);
                    }
                });
            }
        });
    };

    return (
        <div className="flex justify-between">
            <div className="">
                <div className="card card-compact bg-base-100 w-full shadow-xl">
                    <figure>
                        <img src={poster} alt="Movie Poster" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className="font-bold text-md">{genre}</p>
                        <p>
                            <span className="font-bold text-lg">Release Year:</span>{" "}
                            <span className="text-lg font-semibold">{year}</span>
                        </p>
                        <p className="flex items-center">
                            <span className="font-bold text-lg">Rating:</span>{" "}
                            <span className="text-lg font-semibold pl-3">{rating}</span>
                            <img
                                className="h-6"
                                src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                                alt="Star Icon"
                            />
                        </p>
                        <p>
                            <span className="font-bold text-lg">Time:</span>{" "}
                            <span className="text-lg font-semibold">{duration}</span>
                        </p>
                        <div className="card-actions justify-end">
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn font-semibold text-lg rounded-full hover:bg-[#E50914] bg-[#b70c14] text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFavCard;
