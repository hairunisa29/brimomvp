import React, { Fragment, useState } from "react";
import Header from './header.js'
import Footer from './footer.js'

export default function ComplaintPage(){
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    // const [file, setFile] = useState(null)

    const onChangeSubject = (e) => {
        const value = e.target.value
        setSubject(value)
    }

    const onChangeContent = (e) => {
        const value = e.target.value
        setContent(value)
    }


    // const handleFile = (e) => {
    //     let file = e.target.files[0]

    //     setFile({file:file})
    // }

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
                            <input 
                                type="text" 
                                class="form-control" 
                                id="inputSubject" 
                                placeholder="Subject"
                                value={subject}
                                onChange={onChangeSubject}
                            />
                        </div> 
                        <div class="form-group">
                            <label for="textArea">Details</label>
                            <textarea 
                                class="form-control" 
                                id="textArea" 
                                rows="3"
                                value={content}
                                onChange={onChangeContent}
                            ></textarea>
                            <button 
                                type="submit" 
                                className="btn btn-primary mt-2">Submit</button>
                        </div>

                        
                        </form>  
                    </div>
                    <div class="card-body mx-auto">
                        <form>
                            <div className="form-group">
                                <label for="upload">Additional File</label>
                                <input 
                                    type="file" 
                                    class="form-control-file" 
                                    id="FileScreenshot"
                                    // onChange={(e)=>this.handleFile(e)}
                                />
                                <button 
                                    className="btn btn-primary mt-2 col-8"
                                    type="button"
                                    // onClick={}
                                >Upload</button>
                            </div>
                            
                                <legend className="col-form-label">Category</legend>
                                <div className="col">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="layananpublik" value="option1" checked/>
                                    <label className="form-check-label" for="gridRadios1">
                                        Layanan Publik
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="mobilebanking" value="option1" checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Mobile Banking
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="internetbanking" value="option1" checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Internet Banking
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="others" value="option1" checked/>
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

