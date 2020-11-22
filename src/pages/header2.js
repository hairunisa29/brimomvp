import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from '../illustration/logoBRI.png';
import './pages.css';



export default function Header2(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark" id="Navbar">
                <Link to ="/complaintpage" class="navbar-brand">
                    <img src={logo} id="logoBRI" alt="Login"></img>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to ="/" class="nav-item nav-link">Login</Link>
                    </li>
                </ul>
            </div>
            </nav>
    )
}