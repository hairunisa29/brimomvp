import React, { Fragment } from "react";
import logo from '../illustration/signup.svg';
import './pages.css';
import { Link } from "react-router-dom";

export default function Registration() {
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [noktp, setNoKtp] = useState('')
    const [nohp, setNoHp] = useState('')
    const [norekening, setNoRekening] = useState('')


    return (
        <Fragment>
            <div className="Regis">
            <div className="row">
                <div className="col2">
                    <img src={logo} className="logo" alt="ilustrasi login"/>
                    <h1 className="heading1">JOIN US!</h1>
            </div>
            <div className="col3">
            <form>
                <h3 className="heading3">Registration</h3>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputKTP">No.KTP</label>
                            <input type="text" className="form-control" id="inputKTP" placeholder="ID Number"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputFullName">Fullname</label>
                            <input type="text" className="form-control" id="inputFullname" placeholder="Fullname"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputNoHP">No.HP</label>
                            <input type="text" className="form-control" id="inputNoHP" placeholder="Phone Number"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputUsername">Username</label>
                            <input type="username" className="form-control" id="inputUsername" placeholder="Username"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputNoRek">No.Rekening</label>
                            <input type="text" className="form-control" id="inputNoRek" placeholder="Bank Account Number"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                        <div className="button col-md-6">
                            <button type="submit" className="btn btn-primary">Register</button>
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