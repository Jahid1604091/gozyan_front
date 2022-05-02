import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import AuthUser from '../components/AuthUser';
import { base_url } from '../utils/constants';

const LoginPage = () => {
    const navigate = useNavigate();
    const { http,setToken } = AuthUser();
    const [state, setState] = useState({
        email: '', password: '', err: false
    });

    const handleChange = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value
        })

    }

    const login = async (state) => {
        // console.log(state)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { email, password } = state;
        const { data: { data } } = await axios.post(`${base_url}/login`, { email, password }, config);



        if (data.email === email) {
            localStorage.setItem('userInfo', JSON.stringify(data))
            navigate('/dashboard');
        }
        setState({
            ...state,
            err: true
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //call login method
        // login(state)
        const { email, password } = state;
        const {data} = await http.post('/login', { email: email, password: password });
        await setToken(data.user,data.access_token)
        // console.log(data)

    }
    return (
        <Wrapper>
            <div className="section">
                <div className="section-center">
                    <div className="row">
                        <div className="col-md-5 mx-auto p-4 my-4 shadow"
                            style={{ borderTop: 'var(--clr-primary) 3px solid', backgroundColor: '#fff' }}
                        >
                            {
                                state.err && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <h5>Something Went Wrong!</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            }


                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                    <form onSubmit={handleSubmit}>
                                        <div className="text-center mb-3">
                                            <p><span className='sign-in'>Sign in</span> with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>

                                        <p className="text-center">or:</p>




                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="loginName">Email </label>
                                            <input onChange={(e) => handleChange(e)} name='email' value={state.email} type="email" id="loginName" className="form-control" />

                                        </div>


                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="loginPassword">Password</label>
                                            <input onChange={(e) => handleChange(e)} name='password' value={state.password} type="password" id="loginPassword" className="form-control" />

                                        </div>


                                        {/* <div className="row mb-4">
                                            <div className="col-md-6 d-flex justify-content-center">

                                                <div className="form-check mb-3 mb-md-0">
                                                    <input onChange={(e)=>handleChange(e)} name='name' value={state.name} className="form-check-input onChange={(e)=>handleChange(e)} name='name' value={state.name}" type="checkbox" value="" id="loginCheck" checked />
                                                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 d-flex justify-content-center">

                                                <a href="#!">Forgot password?</a>
                                            </div>
                                        </div> */}

                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-block mb-4 shadow">Sign In</button>
                                        </div>



                                        <div className="text-center">
                                            <p>Not a member? <Link to='/register'>Signup</Link></p>
                                        </div>
                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Wrapper>
    )
}
const Wrapper = styled.section`
.sign-in{
    font-size:30px ;
    color:var(--clr-primary) ;
}

`
export default LoginPage