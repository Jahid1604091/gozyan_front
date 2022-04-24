import React from 'react';
import ByType from './ByType';
import Explore from './Explore';
import FeaturedHotels from './FeaturedHotels';
import Places from './Places';

const Home = () => {
    return (
        <div>
           
            <ByType/>
            <Explore/>
            <Places/>
            <FeaturedHotels/>
        </div>
    );
};

export default Home;