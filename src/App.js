import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { Vendor } from './vendors/vendor.component';
import { AddVendor } from './vendors/addvendor.component'
import { Login } from './login/';
import { Home } from './home/';
import { history } from './_helpers';
import { PrivateRoute } from './_components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Switch>
              <PrivateRoute exact path='/home' component={Home} />
              <PrivateRoute exact path='/registrations' component={Vendor} />
              <PrivateRoute exact path='/register' component={AddVendor} />
              <PrivateRoute exact path='/edit-registration/:id' component={AddVendor} />
              <Route exact path='/' component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
