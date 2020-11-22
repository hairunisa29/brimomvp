import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../illustration/login.svg';
import './pages.css';
import Footer from './footer.js';


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
            <div className="Login">
               
                <div className="row">
                    <div className="col1">
                        <h1 className="heading1">COMPLAIN HANDLING</h1>
                        <h1 className="BRImo">BRImo</h1>
                        <img src={logo} className="img-fluid" alt="Login"></img>
                    </div>
                    <div className="col1">
                    <div className="card" style={{width:"120%"}}>
                        <div className="card-body">
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
                                    <Link to ="/passwordrecovery">Forgot password?</Link>
                                </small>
                            </div>
                            <Link to ="/listcomplaint" button type="submit" class="btn btn-primary">Login</Link>
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
               
           
           
    )
}