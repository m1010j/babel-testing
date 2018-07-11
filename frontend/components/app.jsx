import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form';
// import SignupFormContainer from './session/signup_form';

const App = () => (
  <div>
    <h1>IKE! by Bogdan</h1>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" render={props => <h2>signup</h2>} />
  </div>
);

export default App;
