import React from 'react'
import styled from 'styled-components'
import Hotel from '../components/Hotel'
import SearchHotel from '../components/SearchHotel'
import { useHotelContext } from '../context/hotel_context'

const HotelsPage = () => {
  const {all_hotels} = useHotelContext();
  
  return (
    <Wrapper className='page-100'>
      <div className="section">
        <div className="section-center">
          <SearchHotel />

          <div className="row">
            <div className="col-md-4">
              Sidebar
            </div>
            <div className="col-md-8">
              {
                all_hotels.map((hotel)=>{
                  return <Hotel key={hotel.id} hotel={hotel}/>
                  
                })
              }
            </div>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`

`

export default HotelsPage