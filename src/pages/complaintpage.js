import React, { Fragment } from "react";
import Header from './header.js'
import Footer from './footer.js'

export default function ComplaintPage(){
    return(
        <div className="App">
            <div className="complaint">
                <Header/>
            <div className="card mx-auto px-auto" id="complaint">
                <h3 className="heading3">Complaint</h3>
                <div class="row">
                    <div class="card-body mx-auto">
                        <form>
                        <div class="form-group">
                            <label for="inputSubject">Subject</label>
                            <input type="text" class="form-control" id="inputSubject" placeholder="Subject"/>
                        </div> 
                        <div class="form-group">
                            <label for="textArea">Details</label>
                            <textarea class="form-control" id="textArea" rows="3"></textarea>
                            <button type="submit" class="btn btn-primary mt-2">Submit</button>
                        </div>

                        
                        </form>  
                    </div>
                    <div class="card-body mx-auto">
                        <form>
                            <div class="form-group">
                                <label for="upload">Additional File</label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                            </div>
                            
                                <legend class="col-form-label">Category</legend>
                                <div class="col">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Layanan Publik
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Mobile Banking
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Internet Banking
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Others
                                    </label>
                                </div>
                                </div>
                            
                        </form>
                    </div>
                </div>
                
                
            </div>
            <Footer/>
            </div>
            </div>

    )
}

