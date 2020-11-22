import React, {useState} from 'react';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('')

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        if(!value) {
            setErrorPassword('Password Cannot be Empty')
        } else {
            setErrorPassword('Pa')
        }
    }


    return(
        <div style={{marginTop: '170px'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input 
                                        type="password"
                                        placeholder="Enter New Pasword" 
                                        className="form-control" 
                                        value={password} 
                                        onChange={changePassword}
                                    />
                                    {
                                        errorPassword && (
                                            <p className="text-danger">{errorPassword}</p>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input 
                                        type="password"
                                        placeholder="Enter New Pasword" 
                                        className="form-control" 
                                        value={password} 
                                        onChange={changePassword}
                                    />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}