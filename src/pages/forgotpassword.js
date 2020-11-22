import React, { Fragment, useState } from "react";
import axios from 'axios';

import './pages.css';
import Header2 from './header2.js'

export default function ForgotPassword() {
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');
    const [alert,setAlert] = useState('');

    const changeEmail = (e) =>{
        setEmail(e.target.value)
        setError('')
    }


    const send = () => {
        if(!email) {
            setError('Email Cannot be Blank')
        } else {
            axios.put('alamatAPI', { email: email })
            .then(res => {
                setEmail('')
                setAlert('Please Check Your Email')
                setTimeout(() => {
                    setAlert('')
                },3000)
            })
        }
    }


        return(
            <Fragment>
            <Header2/>
            <div className="card" style={{width:"35%"}} id="forgotpassword">
                {
                    alert && (
                        <div className="alert alert-danger">
                            <p>{alert}</p>
                        </div>
                    )
                }
                {
                    error && (
                        <div className="alert alert-danger">
                            <p>{error}</p>
                        </div>
                    )
                }
                <div className="card-body">
                <div className="form-group">
                    <h3 className="heading3">Password Recovery</h3>
                    <label for="username">Send Email to:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        placeholder = "Enter Email"
                        value={email}
                        onChange={changeEmail}
                    />
                </div>
                <button type="submit" onClick={send} class="btn btn-primary">Send</button>
            </div>
            </div>
        </Fragment>
        )
    
}

