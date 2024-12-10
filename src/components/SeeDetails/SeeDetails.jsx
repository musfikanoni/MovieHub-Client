import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SeeDetails = () => {
    const movie = useLoaderData();
    const {_id, poster, title, genre, year, duration, rating, summary} = movie;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
        });
    }

    return (
        <div>
            <h1>details</h1>
            <div className="flex justify-center  pb-14 pt-16">
                <div className="card-side lg:flex flex-none rounded-xl bg-base-100 border shadow-2xl lg:w-8/12 w-10/12">
                            <img className="ms-8 mt-12 rounded-xl lg:h-[220px] h-[147px] object-contain"
                            src={poster}
                            alt="Movie" />
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className="font-semibold">Genre: <span className="font-normal">{genre}</span></p>
                        <p className="font-semibold">Release Year: <span className="font-normal">{year}</span></p>
                        <p className="font-semibold">Duration: <span className="font-normal">{duration}</span></p>
                        <p className="font-semibold">Rating: <span className="font-normal">{rating}</span></p>
                        <p className="font-semibold">Summary: <span className="text-sm font-normal">{summary}</span></p>
                        <div className="card-actions lg:pt-0 pt-5 md:justify-start lg:justify-end justify-center">
                            <button className="btn btn-outline font-semibold text-base rounded-full  hover:bg-[#E50914] bg-[#b70c14] text-white">Add to Favorite</button>
                            <button onClick={() => handleDelete(_id)} className="btn font-semibold text-base rounded-full  hover:bg-[#E50914] bg-[#b70c14] text-white">Delete Movie</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeeDetails;