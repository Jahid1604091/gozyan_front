
import React from 'react'
import styledComponents from 'styled-components'
import banner from '../assets/banner.jpg'
import Facilities from './Facilities'


const Hotel = ({hotel}) => {
  
   console.log(hotel.room_details)
    return (
        <Wrapper>
            <div className="card mb-3" >
          
                <div className="row g-0">
                    <div className="col-md-4 p-2">
                        <img src={hotel.img_url} className="img-fluid rounded-start" alt={hotel.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                            <p className="card-text"><span className='border p-2 rounded'>{hotel.type}</span> <span>{hotel.rating} star</span></p> 
                            <h5>BDT 3200</h5>
                            </div>
                            <i className="fa-solid fa-location-dot"></i>
                            <h5 className="card-title fw-bold">{hotel.name}</h5>
                            <p className="card-text">  <i className="fas fa-map-marker"></i>  {hotel.location} </p>
                            <div className="facilities d-flex justify-content-between">
                            <Facilities/>
                            <Facilities/>
                            <Facilities/>
                            <Facilities/>
                            <Facilities/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styledComponents.section`

`

export default Hotel