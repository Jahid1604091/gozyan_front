import React, { useEffect, useState } from 'react';
import "./FeaturedHotels.css"
import FeaturedHotel from './FeaturedHotel';
import { useHotelContext } from '../../context/hotel_context';

const FeaturedHotels = () => {
    const {all_hotels} = useHotelContext()

    return ( 
        <div className='featured-hotels'>
            <h1>Featured Hotels and Properties</h1>
            <div className="featured-hotel">
            {
                all_hotels.splice(0,4).map((featuredhotel) => (<FeaturedHotel key={featuredhotel.id} featuredhotel = {featuredhotel}/>))
            }
            </div>
        </div>
    );
};

export default FeaturedHotels;