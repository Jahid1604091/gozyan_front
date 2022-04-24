import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const SingleFeaturedHotel = ({ img_url, name, current_price, id }) => {
    return (
        <Wrapper>
            <div className="container shadow">
                <img src={img_url} alt={name} className="image" />
                <div className="description">
                    <h6 className="name">{name}</h6>
                    <h6 className="name">{current_price} USD</h6>
                </div>
                <Link to={`hotels/${id}`} className="overlay"><i className="fas fa-search"></i> view </Link>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`


.container{
    padding: 10px;
    margin: 20px;
    position: relative;
    cursor: pointer;
    transition: var(--transition);
    &:hover .image{
        opacity: 0.3;
    }
    &:hover .overlay{
        opacity: 1;
    }
  img{
      height: 260px;
      width: 100%;
      transition: var(--transition);
  }
  .description{
      margin: auto 0;
      padding: 10px 0;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      h6{
          font-size: 15px;
          font-weight: 600;
      }
  }
  .overlay{
    transition: var(--transition);
      position: absolute;
      top: 40%;
      left: 40%;
      font-weight: 700;
      opacity: 0;
  
  }
}
`

export default SingleFeaturedHotel
