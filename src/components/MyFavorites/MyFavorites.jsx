import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyFavCard from '../MyFavCard/MyFavCard';
import { Helmet } from 'react-helmet-async';

const MyFavorites = () => {
    const data = useLoaderData();
    const [favs, setFavs] = useState(data);

    const handleDeleteFromState = (id) => {
        setFavs(favs.filter((fav) => fav._id !== id));
    };

    return (
        <div>
            <Helmet>
                <title>My Favorites | MovieHub</title>
            </Helmet>
            <h2 className="text-3xl font-bold pt-20 pb-5 text-center mt-20">My All Favorite Movies</h2>
            <div className="w-10/12 mx-auto pb-14 pt-16">
                <div className="gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {
                        favs.map((fav) => (
                            <MyFavCard
                                key={fav._id}
                                fav={fav}
                                onDelete={handleDeleteFromState}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyFavorites;
