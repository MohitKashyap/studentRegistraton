import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Vendor } from './vendors/vendor.component';
import { AddVendor } from './vendors/addvendor.component'
//import { Login } from './login/';
import { Home } from './home/';
import { history } from './_helpers';
import { PrivateRoute } from './_components';

import "../src/assets/css/argon-design-system-react.min.css";
import "../src/assets/vendor/nucleo/css/nucleo.css";
import "../src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../src/assets/scss/argon-design-system-react.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path='/home' component={Home} />
            {/* <PrivateRoute exact path='/contactus' component={ContactUs} /> */}
            <PrivateRoute exact path='/registrations' component={Vendor} />
            <PrivateRoute exact path='/register' component={AddVendor} />
            <PrivateRoute exact path='/edit-registration/:id' component={AddVendor} />
            <Route exact path='/' component={AddVendor} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
