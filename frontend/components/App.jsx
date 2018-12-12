import React from 'react';
import { Route } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';

const App = () => (
  <div>
    <NavbarContainer />
    <h1>Rome wasn't built in one day, and neither will this app be.</h1>

    <Route path="/signin" component={SignInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
