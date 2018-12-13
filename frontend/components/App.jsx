import React from 'react';
import { Route } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session/signup_form_container';
import SignInFormContainer from './session/signIn_form_container';
import Splash from './splash/splash';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    {/* Home navbar */}
    <Route exact path="/" component={NavbarContainer} />
    {/* Splash page */}
    <Route exact path="/" component={Splash} />
    {/* Login and Sign Up forms */}
    <AuthRoute path="/login" component={SignInFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
