import React from 'react'
import Signup from './components/authentication/Signup'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/authentication/Login'
import PrivateRoute from './components/authentication/PrivateRoute'
import ForgotPassword from './components/authentication/ForgotPassword'
import UpdateProfile from './components/authentication/UpdateProfile'
import Profile from './components/authentication/Profile'
import Dashboard from './components/googleDrive/Dashboard'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />

          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
