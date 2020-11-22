import React from "react";
import './App.css';
import Login from './pages/login.js'
import Registration from './pages/registration.js'
import ComplaintPage from './pages/complaintpage.js'
import ListComplaint from './pages/listcomplaint.js'
import ForgotPassword from './pages/forgotpassword.js'
import ResetPassword from './pages/resetpassword.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App () {
 
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/complaintpage" component={ComplaintPage} />
          <Route path="/listcomplaint" component={ListComplaint} />
          <Route path="/forgotpassword" component={ForgotPassword} />  
          <Route path="/resetpassword/:token" component={ResetPassword} />
      </Switch>
    </Router>
    
  );
}

export default App;
