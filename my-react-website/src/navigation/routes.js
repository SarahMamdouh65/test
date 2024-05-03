import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import statement
import routes from './routes'; // Import your routes object

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
      <Routes> {/* Updated component */}
        <Route path={routes.LOGIN} element={<Login />} /> {/* Updated usage of Route */}
        <Route path={routes.REGISTER} element={<Register />} /> {/* Updated usage of Route */}
        <Route path={routes.COMPLETEREGISTRATION} element={<CompleteRegistration />} /> {/* Updated usage of Route */}
        <Route path={routes.HOME} element={<Home />} /> {/* Updated usage of Route */}
        <Route path={routes.HOMENAVIGATOR} element={<HomeNavigator />} /> {/* Updated usage of Route */}
        <Route path={routes.APPOINTMENT} element={<Appointment />} /> {/* Updated usage of Route */}
        <Route path={routes.MAKEAPPOINTMENT} element={<MakeAppointment />} /> {/* Updated usage of Route */}
        <Route path={routes.TIMELINE} element={<Timeline />} /> {/* Updated usage of Route */}
        <Route path={routes.PROFILE} element={<Profile />} /> {/* Updated usage of Route */}
      </Routes> {/* Updated component */}
    </Router>
  );
}

export default App;
