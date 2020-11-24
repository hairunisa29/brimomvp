import React, { Fragment, useState } from "react";
import Header from './header.js'
import Footer from './footer.js'
import axios from 'axios'

export default function ComplaintPage(){
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [file, setFile] = useState(null)
    const [category, setCategory] = useState('')

    const onChangeSubject = (e) => {
        const value = e.target.value
        setSubject(value)
    }

    const onChangeContent = (e) => {
        const value = e.target.value
        setContent(value)
    }


    const handleFile = (e) => {
        let file = e.target.files[0]

        setFile({file:file})
    }


    const handleUpload = (e) => {
        console.log(file)
    }


    const handleCategory = (e) => {
        const value = e.target.value
        setCategory(value)
        console.log(value)
    }


    const clickSubmit = (e) => {
        const data={
            name: category
        }


        console.log(data)
        axios.post('', data)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error.response)
        });

        e.preventDefault()
    }


    return(
        <div className="App">
            <div className="complaint">
                <Header/>
            <div className="card mx-auto px-auto" id="complaint">
                <h3 className="heading3">Complaint</h3>
                
                    <div className="card-body mx-auto">
                        <form>
                        <div className="form-group">
                            <label htmlFor="inputSubject">Subject</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputSubject" 
                                placeholder="Subject"
                                value={subject}
                                onChange={onChangeSubject}
                            />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="textArea">Details</label>
                            <textarea 
                                className="form-control" 
                                id="textArea" 
                                rows="3"
                                value={content}
                                onChange={onChangeContent}
                            ></textarea>
                        </div>

                    
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="upload">Additional File</label>
                                    <input 
                                        type="file" 
                                        className="form-control-file" 
                                        id="FileScreenshot"
                                        onChange={handleFile}
                                    />
                                </div>
                                <div className="col">
                                    <button 
                                        className="btn btn-primary col-15"
                                        type="button"
                                        id="buttonUpload"
                                        onClick={handleUpload}
                                    >Upload</button>
                                </div>
                            
                            </div>
                            
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                    <select 
                                        className="form-control" 
                                        id="category"
                                        onChange={handleCategory}
                                    >
                                        <option value='Layanan Perbankan'>Layanan Perbankan</option>
                                        <option value='Mobile Banking'>Mobile Banking</option>
                                        <option value='Internet Banking'>Internet Banking</option>
                                        <option value='Others'>Others</option>
                                    </select>
                            </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary mt-2"
                                    onClick={clickSubmit}
                                >Submit</button>
                        </form>  
                    </div>
            </div>
            <Footer/>
            </div>
            </div>

    )
}

