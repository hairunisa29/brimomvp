import React, { Component } from "react";
import Rating from '@material-ui/lab/Rating';
import { Button, Modal } from 'react-bootstrap';
import {Typography} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import './pages.css';

export default class RatingCustomerToCS extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            value:0
        }
    }

    handleShow = () => {
        this.setState({show: !this.state.show});
    }

  render() {
    return (
        <div>
            <button className="btn" onClick={() => this.handleShow()}>Rate</button>
                <Modal show={this.state.show} >
                    <Modal.Body className="rating">
                        <Button className="close" onClick={() => this.handleShow()}>
                            <span aria-hidden="true">&times;</span>
                        </Button>
                        <h5 className="heading3">Rating Customer Service</h5>
                        <Box component="fieldset" borderColor="transparent">
                            <Typography component="legend">silahkan beri rating setelah penutupan tiket</Typography>
                            <Rating
                                name="simple-controlled"
                                value={this.state.value}
                                onChange={(event, newValue) => {
                                    this.setState({value: newValue});
                                }}
                            />
                        </Box>

                        <form>
                            <div class="form">
                                <textarea class="form-control" id="InputFeedback" rows="3" cols="15"></textarea>
                            </div>
                        </form>
                        <div class="rating">
                            <Button class="btn btn-primary" type="button" id="button-addon2">Send Feedback</Button>
                        </div>
                    </Modal.Body>
                    
                </Modal>
        </div>
    );
  }
}
