import React from "react";
import './App.css';
import Login from './pages/login.js'
import Registration from './pages/registration.js'
import ComplaintPage from './pages/complaintpage.js'
import ListComplaint from './pages/listcomplaint.js'
import ForgotPassword from './pages/forgotpassword.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App () {
 
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/complaintpage" component={ComplaintPage} />
        <Route path="/listcomplaint" component={ListComplaint} />
        <Route path="/passwordrecovery" component={ForgotPassword} />
    <div className="App">
     <Login/>
     
    </div>
        
      
    </Switch>
    </Router>
    
  );
}

export default App;
