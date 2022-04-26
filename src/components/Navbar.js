import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from '../assets/images/IMG-20220413-WA0006-removebg-preview.png'
import HotelIcon from '../assets/images/asset 2.svg'
import TourIcon from '../assets/images/asset 3.svg'
import UsIcon from '../assets/images/usflag.png'



const Navbar = () => {
    const handleChange = () =>{}
    return (
        <Wrapper className='shadow section'>
            <div className="nav-center section-center d-flex justify-content-between">
                <div className="nav-header">
                    <Link to='/'><img src={Logo} alt="SomRentals" /></Link>
                    <button className="nav-toggle" type='button' >btn</button>
                </div>
              
                <div className='right-part d-flex'>
                <label htmlFor="sort"><img src={UsIcon} alt="SomRentals" /> </label>
                <select name="sort" onChange={handleChange} id="sort" value='USD'>
                    <option value="">USD</option>
              
                 
                </select>
                    <Link to='/dashboard' className='btn'>Sign In</Link>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color:var(--clr-grey-9);
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
 
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 165px;
      margin-left: -15px;
    }
  }
  
  .nav-toggle {
    
    
    /* margin-top:400px; */
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
 
  }
  .nav-links {
    display: none;
    font-weight:600;

    img{
        width:50px ;
        height:20px ;
    }
   
  }

  .right-part{
      img{
          width:30px ;
          height:30px ;
          border-radius:50% ;
      }


    select{
        margin-top:3px ;
        cursor: pointer;
        border: none;
        background: transparent;
        text-transform: capitalize;
    }
  }

  a.active{
    border-bottom: 2px solid #17A2B8;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: .9rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid #17A2B8;
        }
      }
    }
    .notification-btn-wrapper {
      display: grid;
    }
  }

`
export default Navbar
