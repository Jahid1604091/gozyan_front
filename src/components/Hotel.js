
import React from 'react'
import styled from 'styled-components'
import Facilities from './Facilities'
import Stars from './Stars'


const Hotel = ({hotel}) => {


    return (
        <Wrapper>
            <div className="card mb-3 shadow" >
          
                <div className="row g-0">
                    <div className="col-md-4 p-2">
                        <img src={hotel.img_url} className="img-fluid rounded-start" alt={hotel.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                            <small className="card-text"><span className='border p-1 rounded text-uppercase'>{hotel.type}</span> </small> 
                            <p className='oldPrice'>{hotel.old_price} USD</p>
                            
                            <h5>USD <strong>{hotel.current_price}</strong></h5>
                            </div>
                        
                            <div className='d-flex justify-content-between'>
                            <h5 className="card-title fw-bold">{hotel.name}</h5>
                            <p className="card-title fw-bold">{hotel.discount ? hotel.discount + "% off" : ''} </p>

                            </div>
                            <p className="">  <i className="fas fa-map-marker"></i>  {hotel.location} </p>
                            <small className="text-muted">  <i className="fas fa-map-marker"></i>  {hotel.sub_location} </small>
                            
                            <div className="facilities d-flex justify-content-start">
                            {
                                hotel.facilities.split(',').map((facility,idx)=>{
                                    return <Facilities key={idx} facility={facility}/>

                                })
                            }
                           
                            </div>
                            <Stars stars={hotel.rating}/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .card-body,p,h5,small{
        text-transform:capitalize;
        color:var(--clr-primary-2);
        line-height:0.8rem;

        p.oldPrice{
            text-decoration: line-through;
        }
    }
`

export default Hotel