import React, { Fragment, useState } from "react";
import logo from './login.svg';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (u) => {
        const value = u.target.value
        setUsername(value)
    }
    const onChangePassword = (p) => {
        const value = p.target.value
        setPassword(value)
    }



    return (
        <Fragment>
            <div className="Login">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="heading1">WELCOME TO</h1>
                            <h1 className="BRImo">BRImo</h1>
                            <img src={logo} alt="ilustrasi login" />
                        </div>
                    
                    <div className="col">
                    <form style={{ width: "100%" }}>
                       
                        <div className="form-group">
                            <h3 className="heading3">Login</h3>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter Username"
                                value={username}
                                onChange={onChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={onChangePassword}
                            />
                            <small>
                                <a href="default.asp" target="_blank">Forgot Password?</a>
                            </small>
                        </div>
                        <a type="submit" className="btn btn-primary" href="">Login</a>
                        <small className="form-text text-muted">
                            Don't have an account?
                    <a href="registration" target="_blank"> Sign up.</a>
                        </small>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login