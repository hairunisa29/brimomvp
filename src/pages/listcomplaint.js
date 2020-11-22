import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from './header.js'
import Footer from './footer.js'
import RatingCustomerToCS from './ratingpopup.js'


export default function ListComplaint() { 
    const token = localStorage.getItem('token')
    if(!token) {
        return <Redirect to="/" />
    }

    return(
        <Fragment>
            <Header/>
            <div className="col8">
            <h3 className="heading3">Complaint</h3>
            <table className="table table-hover">
            
                <thead>
                    <tr>
                        <th scope="col">Ticket Number</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Assigned to</th>
                        <th scope="col">Feedback</th>
                        <th scope="col">Status</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><RatingCustomerToCS/></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Mark</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><RatingCustomerToCS/></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Mark</td>
                        <td>Larry</td>
                        <td>@twitter</td>
                        <td><RatingCustomerToCS/></td>
                        </tr>
                </tbody>
            </table>
            </div>
                    <div class="btn-float">
                        <Link to ="/complaintpage" button type="submit" class="btn btn-primary">
                            <h5>
                                <i class="fa fa-plus"></i>
                                 New Complaint
                            </h5>
                            
                        </Link>
                    </div>
            <Footer/>
            </Fragment>
    )   

}