import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomeContainer from './home/home_container';
import SignInFormContainer from './session/signin_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      {/* Home page */}
      <Route exact path="/" component={HomeContainer} />
      {/* Login form */}
      <AuthRoute path="/login" component={SignInFormContainer} />
      {/* Sign up form */}
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      {/* Page doesn't exist */}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
