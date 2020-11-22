import React, {useState} from 'react';
import axios from 'axios'

const ResetPassword = (props) => {
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    const [alert,setAlert] = useState('');


    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        if(!value) {
            setErrorPassword('Password Cannot be Empty')
        } else {
            setErrorPassword('')
        }
    }

    const onChangeConfirmPassword = (e) => {
        const value = e.target.value
        setConfirmPassword(value)
        if(!value) {
            setErrorConfirmPassword('Confirm Password cannot be blank')
        }
        else if (password !== value) {
            setErrorConfirmPassword("Password doesn't match")
        }
        else {
            setErrorConfirmPassword('')
        }
    }

    const save  = () => {
        const data = {
            password: password,
            token:props.match.params.token
        }
        axios.put ('alamatAPI', data)
        .then (res => {
            if(res) {
                setPassword('')
                setConfirmPassword('')
                setAlert('Password succesfully changed')
                setTimeout(() => {
                    setAlert('')
                }, 3000)
             }
        })
    }


    return(
        <div style={{marginTop: '170px'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                {
                                  alert && (
                                      <div className="alert alert-primary">
                                          {alert}
                                      </div>
                                  )  
                                }
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input 
                                        type="password"
                                        placeholder="New Password" 
                                        className="form-control" 
                                        value={password} 
                                        onChange={onChangePassword}
                                    />
                                    {
                                        errorPassword && (
                                            <p className="text-danger">{errorPassword}</p>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input 
                                        type="password"
                                        placeholder="Confirm Password" 
                                        className="form-control" 
                                        value={confirmPassword} 
                                        onChange={onChangeConfirmPassword}
                                    />
                                    {
                                        errorConfirmPassword && (
                                            <p className="text-danger">{errorConfirmPassword}</p>
                                        )
                                    }
                                </div>

                                <button className="btn btn-primary" onClick={save}>Save</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default ResetPassword;