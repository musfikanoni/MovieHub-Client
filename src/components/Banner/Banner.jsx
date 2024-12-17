import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co.com/CsZYnT0/Kraven3.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co.com/Rcx3JKf/slider-2.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co.com/KyQLM3R/Slider-3.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co.com/30y72yw/Slider-4.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>


// {user ? (
//     <div className='flex items-center gap-3'>
//         <div className='group'>
//             <Link to='/profile'>
//                 {user.photoURL ? (
//                     <img src={user.photoURL} alt="user" className='w-8 h-8 rounded-full cursor-pointer' />
//                 ) : (
//                     <FaRegCircleUser className='text-3xl text-gray-700 cursor-pointer' />
//                 )}
//             </Link>
//             <div className='absolute left-0 mt-2 w-40 bg-white text-gray-600 text-sm rounded-lg p-2 hidden group-hover:block'>
//                 {user.displayName || 'User'}
//             </div>
//         </div>
//         <button onClick={handleSignOut} className='btn btn-sm'>Sign Out</button>
//     </div>
// )  : (
//     <div className='flex gap-2'>
         
//         <Link to='/login' className='btn bg-base-200'>
//         Login</Link>
//         <Link to='/register' className='btn bg-base-200'>
//         Register</Link>

//     </div>
    
// )
// }

    );
};

export default Banner;