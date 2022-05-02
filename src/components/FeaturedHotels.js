import React from 'react'
import { useHotelContext } from '../context/hotel_context'
import SingleFeaturedHotel from './SingleFeaturedHotel'


const FeaturedHotels = () => {
    const {featured_hotels}  = useHotelContext()

    return (
    
            <div className="row">
            {
               featured_hotels.map(hotel=>(
                    <div className="col-md-4"  key={hotel.id}>
                    <SingleFeaturedHotel {...hotel}/>
                    </div>
                ))
            }
            </div>
      
    )
}

export default FeaturedHotels
