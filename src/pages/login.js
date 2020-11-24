import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from '../illustration/login.svg';
import './pages.css';
import Footer from './footer.js';
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const submitLogin = (e) => {
        const data={
            email: email,
            password: password,
        }
        axios.post(' http://a6d7fd55ca1f.ngrok.io/accounts/authenticate', data)
        .then(result => {
            console.log(result)

            if(result) {
                localStorage.setItem('token', result.data.token)
                setRedirect(true)
            }
            console.log(result.data.token)
        })
        .catch(error => {
            console.log(error.response)
        });

        e.preventDefault()
    }

    return (
        <Fragment>
            {
                redirect && (
                    <Redirect to="/listcomplaint" />
                )
            }
            <div className="Login">
                <div className="row">
                    <div className="col1">
                        <h1 className="heading1">COMPLAIN HANDLING</h1>
                        <h1 className="BRImo">BRImo</h1>
                        <img src={logo} className="img-fluid" alt="Login"></img>
                    </div>
                    <div className="col1">
                    <div className="card" style={{width:"120%"}}>
                        <div className="card-body" id="formlogin">
                        <form 
                            style= {{width:"100%"}}
                        >
                            <div className="form-group">
                                <h3 className="heading3">Login</h3>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email"
                                    placeholder = "Enter Email"
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password"
                                    placeholder = "Enter Password"
                                    value={password}
                                    onChange={onChangePassword}
                                />
                                <small className="form-text text-muted">
                                    <Link to ="/forgotpassword">Forgot password?</Link>
                                </small>
                            </div>
                            <button className="btn btn-primary" onClick={submitLogin}>Login</button>
                            {/* <Link to ="/listcomplaint" className="btn btn-primary" type="button">Login</Link> */}
                            <small className="form-text text-muted">
                                Don't have an account?
                                <Link to ="/registration"> Sign up.</Link>
                            </small>
                        </form>   
                        </div>
                    </div>
                        
                    </div>
                   
                </div>
                <Footer/>
            </div>
        </Fragment>
           
           
    )
}