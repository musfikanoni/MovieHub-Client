import React from 'react';
import Banner from '../Banner/Banner';
import { Outlet } from 'react-router-dom';
import FeaturedMovies from '../FeaturedMovies/FeaturedMovies';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedMovies></FeaturedMovies>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;