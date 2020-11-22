import React, { Fragment } from "react";

import './pages.css';
import Header2 from './header2.js'

class ForgotPassword extends React.Component {
    render(){
        return(
            <Fragment>
            <Header2/>
            <div className="card" style={{width:"35%"}}>
                <div className="card-body">
                <div className="form-group">
                    <h3 className="heading3">Password Recovery</h3>
                    <label for="username">Send Email to:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        placeholder = "Enter Email"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </div>
            </div>
        </Fragment>
        )
    }
}

export default ForgotPassword;