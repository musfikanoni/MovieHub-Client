import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full lg:pt-0 pt-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co.com/CsZYnT0/Kraven3.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn backdrop-blur bg-white/5 text-gray-300 border-none btn-circle">❮</a>
                    <a href="#slide2" className="btn backdrop-blur bg-white/5 text-gray-300 border-none btn-circle">❯</a>
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

    );
};

export default Banner;