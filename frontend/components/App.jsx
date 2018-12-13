import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session/signup_form_container';
import SignInFormContainer from './session/signIn_form_container';
import Splash from './splash/splash';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    {/* Home navbar */}
    <Route exact path="/" component={NavbarContainer} />

    <Switch>
      {/* Login and Sign Up forms */}
      <AuthRoute path="/login" component={SignInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      {/* Splash page */}
      <Route exact path="/" component={Splash} />
      {/* Redirect to home page if link doesn't exist */}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
