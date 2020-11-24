import React, { Fragment, useState } from "react";
import logo from '../illustration/signup.svg';
import './pages.css';
import { Link } from "react-router-dom";
import Footer from './footer.js';
import axios from 'axios'

const Registration =() => {
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [noktp, setNoKtp] = useState('');
    const [nohp, setNoHp] = useState('');
    const [norekening, setNoRekening] = useState('');

    
    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }


    const onChangeFullname = (e) => {
        const value = e.target.value
        setFullname(value)
    }


    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }


    const onChangeNoKtp = (e) => {
        const value = e.target.value
        setNoKtp(value)
    }


    
    const onChangeNoHp = (e) => {
        const value = e.target.value
        setNoHp(value)
    }

    
    const onChangeNoRekening = (e) => {
        const value = e.target.value
        setNoRekening(value)
    }



    const clickRegister = (e) => {
        const data={
            email: email,
            full_name: fullname,
            username: username,
            password: password,
            no_ktp: noktp,
            no_hp: nohp,
            no_rekening: norekening
        }


        console.log(data)
        axios.post('http://a6d7fd55ca1f.ngrok.io/accounts/register', data)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error.response)
        });

        e.preventDefault()
    }

    return (
        <Fragment>
            <div className="Regis">
            <div className="row">
                <div className="col2">
                    <img src={logo} className="logo" alt="ilustrasi login"/>
                    <h1 className="heading1">JOIN US!</h1>
            </div>
            <div className="col3">
            <form >
                {/* // onSubmit={clickRegister} */}
                <h3 className="heading3">Registration</h3>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="inputEmail" 
                                placeholder="Email"
                                value={email}
                                onChange={onChangeEmail}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputKTP">No.KTP</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputKTP" 
                                placeholder="ID Number"
                                value={noktp}
                                onChange={onChangeNoKtp}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputFullName">Fullname</label>
                            <input 
                                type="text" 
                                className="form-control"
                                id="inputFullname" 
                                placeholder="Fullname"
                                value={fullname}
                                onChange={onChangeFullname}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNoHP">No.HP</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputNoHP" 
                                placeholder="Phone Number"
                                value={nohp}
                                onChange={onChangeNoHp}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputUsername">Username</label>
                            <input 
                                type="username" 
                                className="form-control" 
                                id="inputUsername" 
                                placeholder="Username"
                                value={username}
                                onChange={onChangeUsername}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNoRek">No.Rekening</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputNoRek" 
                                placeholder="Bank Account Number"
                                value={norekening}
                                onChange={onChangeNoRekening}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="inputPassword" 
                                placeholder="Password"
                                value={password}
                                onChange={onChangePassword}
                            />
                        </div>
                        <div className="button col-md-6">
                            <button 
                                type="submit"  
                                onClick={clickRegister}
                                className="btn btn-primary"
                            >Register</button>
                            <small className="form-text text-muted">
                                Already have an account? 
                                <Link to ="/"> Sign in.</Link>
                            </small>
                        </div>
                    </div>
                </form>
          </div>
        </div>
        <Footer/>
        </div>
        </Fragment>
    )
}



export default Registration;