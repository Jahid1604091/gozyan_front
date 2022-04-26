import React from 'react'
import styled from 'styled-components'
import SearchHotel from '../components/SearchHotel'
import banner from '../assets/banner.jpg'

import FeaturedHotels from '../components/FeaturedHotels';
import Home from './Home/Home';
const HomePage = () => {
  return (
    <Wrapper>

      <div className='page-100'>
        <div className="section">
          <div className="section-center">
            <SearchHotel />
          </div>

        </div>
      </div>

      <div className="section">
        <div className="section-center">
          <Home />
        </div>
      </div>

      <div className="section">
        <div className="section-center">
          <h3>Featured Hotels and Properties</h3>
          <FeaturedHotels />
        </div>

      </div>

    </Wrapper>
  )
}

const Wrapper = styled.article`
.page-100{
  background-image: url("https://a0.muscache.com/im/pictures/cf39f4c4-e860-43d4-85be-deddd7b2da90.jpg?im_w=1440");
  /* background-image:linear-gradient(rgb(2,2,1,0.5), rgb(2,2,72,0.5)), url(${banner});  */
  background-size: cover;
  background-repeat: no-repeat;

}
`

export default HomePage