// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './navigation/routes'; // Import your routes object

// Import your components for each route
import Login from './Login';
import Register from './Register';
import CompleteRegistration from './CompleteRegistration';
import Home from './Home';
import HomeNavigator from './HomeNavigator';
import Appointment from './Appointment';
import MakeAppointment from './MakeAppointment';
import Timeline from './Timeline';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.LOGIN} component={Login} />
        <Route path={routes.REGISTER} component={Register} />
        <Route path={routes.COMPLETEREGISTRATION} component={CompleteRegistration} />
        <Route path={routes.HOME} component={Home} />
        <Route path={routes.HOMENAVIGATOR} component={HomeNavigator} />
        <Route path={routes.APPOINTMENT} component={Appointment} />
        <Route path={routes.MAKEAPPOINTMENT} component={MakeAppointment} />
        <Route path={routes.TIMELINE} component={Timeline} />
        <Route path={routes.PROFILE} component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
