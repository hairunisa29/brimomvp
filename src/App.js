
import './App.css';
import Login from './pages/login.js';
import RegistrationCostumerService from './pages/registration.js';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import ListTiket from './pages/tiket.js';
import Home from './pages/home.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={RegistrationCostumerService} />
        <Route path="/listtiket" component={ListTiket} />
        <Route path="/home" component={Home} />
      </Switch>
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          Copyright © FE-BE 07 2020
        </div>
      </footer>
    </div>
  );
}

export default App;
