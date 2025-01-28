import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMovie = () => {
    const movie = useLoaderData();
    const {_id, poster, title, genre, year, duration, rating, summary} = movie;

        const handleUpdateMovie = e => {
            e.preventDefault()
            const form = e.target;
            const poster = form.poster.value;
            const title = form.title.value;
            const genre = form.genre.value;
            const year = form.year.value;
            const duration = form.duration.value;
            const rating = form.rating.value;
            const summary = form.summary.value;
            const updateMovie = {poster, title, genre, year, duration, rating, summary};
            console.log(updateMovie);
    
            if(summary.length < 10){
                setErrorMessage('At least 10 characters must be entered')
            }
            //send data to the server
            fetch(`https://assignment-10-server-plum-eight.vercel.app/movie/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateMovie)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                // e.target.reset();
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        }

    return (
        <div className='py-20'>
            <h2 className='text-xl font-bold lg:px-96 md:text-center px-8 pb-5'>Update Movie: {title}</h2>
            <div className='flex justify-center'>
            <div className="card bg-base-100 w-full lg:max-w-3xl md:max-w-xl max-w-sm shrink-0 shadow-2xl">
                <div className="flex gap-10 ">
                    <form onSubmit={handleUpdateMovie} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Poster</span>
                            </label>
                            <input type="text" defaultValue={poster} name='poster' placeholder="Enter poster link" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Title</span>
                            </label>
                            <input type="text" defaultValue={title} name='title' placeholder="Movie Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <div className="flex justify-between">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Genre</span>
                                    </label>
                                    <select name='genre' defaultValue={genre} className="select select-bordered lg:w-[335px] md:w-[240px] w-[145px] max-w-sm">
                                        <option disabled selected>Genre</option>
                                        <option>Comedy</option>
                                        <option>Drama</option>
                                        <option>Horror</option>
                                        <option>Action</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Release Year</span>
                                    </label>
                                    <select defaultValue={year} name='year' className="select select-bordered lg:w-[335px] md:w-[240px] w-[145px] max-w-sm">
                                        <option disabled selected>Release Year</option>
                                        <option>2024</option>
                                        <option>2023</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Duration</span>
                                </label>
                                <input type="number" defaultValue={duration} name='duration' placeholder="Duration" className="lg:w-[335px] md:w-[240px] w-[145px] max-w-sm input input-bordered" required />
                            </div><div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" defaultValue={rating} name='rating' placeholder="Rating" className="lg:w-[335px] md:w-[240px] w-[145px] max-w-sm input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Summary</span>
                            </label>
                            <textarea name='summary' defaultValue={summary} required className="textarea textarea-bordered" placeholder="Summary"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            {/* <input type="submit" className='btn btn-primary' value="Add Movie" /> */}
                            <button className='btn hover:bg-[#E50914] bg-[#b70c14] text-white'>Update Movie</button>
                        </div>
                        {/* {
                            errorMessage && <p className='text-red-700'>{errorMessage}</p>
                        } */}
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateMovie;