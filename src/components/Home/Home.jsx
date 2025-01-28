import React from 'react';
import Banner from '../Banner/Banner';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// import FeaturedMovies from '../FeaturedMovies/FeaturedMovies';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | MovieHub</title>
            </Helmet>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;