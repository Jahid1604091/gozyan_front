import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./Places.css"

const Places = () => {
    return (
        <Wrapper>
            <div className="row">
                <div className="col-md-6">
                    <div className="div" style={{
                        backgroundImage: 'linear-gradient(rgb(2,2,1,0.5), rgb(2,2,72,0.5)),  url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '300px',
                        color: 'var(--clr-primary-10)',
                        padding: '50px 0 20px 150px',
                        letterSpacing: '3px',
                        margin:'5px'
                    }}>
                        <h2>Dubai</h2>
                        <Link className='explore-link' to='/'><i className="fas fa-arrow-right"></i> Explore</Link>

                    </div>
                </div>

                <div className="col-md-6">
                    <div className="div" style={{
                        backgroundImage: 'linear-gradient(rgb(2,2,1,0.5), rgb(2,2,72,0.5)),  url("https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '300px',
                        color: 'var(--clr-primary-10)',
                        padding: '50px 0 20px 150px',
                        letterSpacing: '3px',
                        margin:'5px'
                    }}>
                        <h2>Turkey</h2>
                        <Link className='explore-link' to='/'><i className="fas fa-arrow-right"></i> Explore</Link>

                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="div" style={{
                        backgroundImage: 'linear-gradient(rgb(2,2,1,0.5), rgb(2,2,72,0.5)),  url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '250px',
                        color: 'var(--clr-primary-10)',
                        padding: '50px 0 10px 100px',
                        letterSpacing: '3px',
                        margin:'5px'
                        
                    }}>
                        <h3>London</h3>
                        <Link className='explore-link' to='/'><i className="fas fa-arrow-right"></i> Explore</Link>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="div" style={{
                        backgroundImage: 'linear-gradient(rgb(2,2,1,0.5), rgb(2,2,72,0.5)),  url("https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '250px',
                        color: 'var(--clr-primary-10)',
                        padding: '50px 0 10px 100px',
                        letterSpacing: '3px',
                        margin:'5px'
                        
                    }}>
                        <h3>USA</h3>
                        <Link className='explore-link' to='/'><i className="fas fa-arrow-right"></i> Explore</Link>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="div" style={{
                        backgroundImage: 'linear-gradient(rgb(2,2,1,0.5), rgb(2,2,72,0.5)),  url("https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2tva3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '250px',
                        color: 'var(--clr-primary-10)',
                        padding: '50px 0 10px 100px',
                        letterSpacing: '3px',
                        margin:'5px'
                        
                    }}>
                        <h3>Bangkok</h3>
                        <Link className='explore-link' to='/'><i className="fas fa-arrow-right"></i> Explore</Link>

                    </div>
                </div>
              
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .explore-link{
        color:var(--clr-primary-10) ;
    }
`
export default Places;