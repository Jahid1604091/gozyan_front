import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
                <footer
                    className="text-center text-lg-start"
                    
                >

                    <div className="container p-4 pb-0">

                        <section className="">

                            <div className="row">

                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h5 className="text-uppercase mb-4 font-weight-bold">
                                        Company name
                                    </h5>
                                    <p className='text-light'>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>


                                <hr className="w-100 clearfix d-md-none" />


                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h5 className="text-uppercase mb-4 font-weight-bold">Products</h5>
                                    <p>
                                        <a>MDBootstrap</a>
                                    </p>
                                    <p>
                                        <a>MDWordPress</a>
                                    </p>
                                    <p>
                                        <a >BrandFlow</a>
                                    </p>
                                    <p>
                                        <a>Bootstrap Angular</a>
                                    </p>
                                </div>


                                <hr className="w-100 clearfix d-md-none" />


                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h5 className="text-uppercase mb-4 font-weight-bold">
                                        Useful links
                                    </h5>
                                    <p>
                                        <a>Your Account</a>
                                    </p>
                                    <p>
                                        <a>Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a>Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a>Help</a>
                                    </p>
                                </div>


                                <hr className="w-100 clearfix d-md-none" />


                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
                                    <p className='text-light'><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p className='text-light'><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                    <p className='text-light'><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p className='text-light'><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>

                            </div>

                        </section>


                        <hr className="my-3" />


                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">

                                <div className="col-md-7 col-lg-8 text-center text-md-start">

                                    <div className="p-3">
                                        &copy; 2022 Copyright
                    
                                    </div>

                                </div>



                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

                                    <a className="btn btn-outline-light btn-floating m-1"
                                       
                                        role="button"
                                    ><i className="fab fa-facebook-f"></i
                                    ></a>


                                    <a className="btn btn-outline-light btn-floating m-1"
                                       
                                        role="button"
                                    ><i className="fab fa-twitter"></i
                                    ></a>


                                    <a className="btn btn-outline-light btn-floating m-1"
                                       
                                        role="button"
                                    ><i className="fab fa-google"></i
                                    ></a>


                                    <a className="btn btn-outline-light btn-floating m-1"
                                       
                                        role="button"
                                    ><i className="fab fa-instagram"></i
                                    ></a>
                                </div>

                            </div>
                        </section>

                    </div>

                </footer>

        </Wrapper>
    )
}

const Wrapper = styled.section`
footer{
    background-color:var(--clr-primary);
    color:var(--clr-primary-10) ;
    a{
        color:var(--clr-primary-9) !important ;
    }

}
    min-height: 5rem;
    /* background-color: var(--clr-grey-10); */
    /* color: var(--clr-primary-1); */
`
export default Footer
