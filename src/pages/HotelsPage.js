import React from 'react'
import styled from 'styled-components'
import FilterHotels from '../components/FilterHotels'
import Hotel from '../components/Hotel'
import { useFilterContext } from '../context/filter_context'


const HotelsPage = () => {
  const {filtered_hotels} = useFilterContext();


  
  return (
    <Wrapper className='page-100'>
      <div className="section">
        <div className="section-center">
         

          <div className="row">
            <div className="col-md-4">
              <FilterHotels/>
            </div>
            <div className="col-md-8">
              
              {
                filtered_hotels.map((hotel)=>{
    
                  return <Hotel 
                  key={hotel.id} 
                  hotel={hotel}
                 />
                  
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