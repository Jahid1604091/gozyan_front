import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
        <Wrapper>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Go Zyan</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/'><FontAwesomeIcon icon={faTimes} /> USD</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/'>Sign In</Link>
                            </li>

                              
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.navbar{
    min-height: 5rem;
   
    /* background-color: var(--clr-primary-4); */
    /* .navbar-collapse{
        transition:var(--transition);
        opacity: 0.5;
        transform: translateY(-300px);
    }
   
    .navbar-collapse.show{
        transition:var(--transition);
        opacity: 1;
        transform: translateY(0);
    }
    */
    .navbar-brand{
        color: var(--clr-primary-4);
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 5px;
    }
    .navbar-toggler:focus,
    .navbar-toggler:active,
    .navbar-toggler-icon:focus {
        outline: none;
        box-shadow: none;
        
    }
    .navbar-toggler i{
            color: var(--clr-primary-4);
    }
    .navbar-nav{
       
        
            li a{
            color: var(--clr-primary-4);
            font-weight: 600;
            text-transform: uppercase;
        }
    }
}

`
export default Navbar
