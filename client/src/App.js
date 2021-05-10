import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ProfilePage from './components/pages/ProfilePage'
import Dashboard from './components/dashboard/Dashboard';

import PrivateRoute from './components/layout/PrivateRoute';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={ProfilePage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;


