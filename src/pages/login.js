import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from '../illustration/login.svg';
import './pages.css';
import Footer from './footer.js';
import axios from 'axios'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const submitLogin = () => {
        const data={
            username: username,
            password: password,
        }
        axios.post('alamatAPI', data)
        .then(result => {
            if(result) {
                localStorage.setItem('token', result.data.token)
                setRedirect(true)
            }
            console.log(result.data.token)
        })
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
                                <label for="username">Username</label>
                                <input 
                                    type="username" 
                                    className="form-control" 
                                    id="username"
                                    placeholder = "Enter Username"
                                    value={username}
                                    onChange={onChangeUsername}
                                />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
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