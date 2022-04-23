import React from 'react'
import styled from 'styled-components'
import SearchHotel from '../components/SearchHotel'
import banner from '../assets/banner.jpg'
const HomePage = () => {
  return (
    <Wrapper className='page-100'>
      <div className="section">
        <div className="section-center">
          <SearchHotel />
        </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
background-image:linear-gradient(rgb(2,2,1,0.7), rgb(2,2,72,0.7)), url(${banner}); 
background-size: cover;
background-repeat: no-repeat;
`

export default HomePage