import React from 'react';
import Swal from 'sweetalert2';

const AddMovie = () => {

    const handleAddMovie = e => {
        e.preventDefault()
        const form = e.target;
        const poster = form.poster.value;
        const title = form.title.value;
        const genre = form.genre.value;
        const year = form.year.value;
        const duration = form.duration.value;
        const rating = form.rating.value;
        const summary = form.summary.value;
        const newMovie = {poster, title, genre, year, duration, rating, summary};
        console.log(newMovie);

        //send data to the server
        fetch('http://localhost:5000/movie', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Movie added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className='flex justify-center py-20'>
            <div className="card bg-base-100 w-full lg:max-w-3xl md:max-w-xl max-w-sm shrink-0 shadow-2xl">
                <div className="flex gap-10 ">
                    <form onSubmit={handleAddMovie} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Poster</span>
                            </label>
                            <input type="text" name='poster' placeholder="Enter poster link" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Movie Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <div className="flex justify-between">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Genre</span>
                                    </label>
                                    <select name='genre' className="select select-bordered lg:w-[335px] md:w-[240px] w-[145px] max-w-sm">
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
                                    <select name='year' className="select select-bordered lg:w-[335px] md:w-[240px] w-[145px] max-w-sm">
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
                                <input type="number" name='duration' placeholder="Duration" className="lg:w-[335px] md:w-[240px] w-[145px] max-w-sm input input-bordered" required />
                            </div><div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name='rating' placeholder="Rating" className="lg:w-[335px] md:w-[240px] w-[145px] max-w-sm input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Summary</span>
                            </label>
                            <textarea name='summary' className="textarea textarea-bordered" placeholder="Summary"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            {/* <input type="submit" className='btn btn-primary' value="Add Movie" /> */}
                            <button className='btn btn-primary'>Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMovie;