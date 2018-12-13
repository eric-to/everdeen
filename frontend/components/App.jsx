import React from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './login_form/login_form';
import NavbarContainer from './navbar/navbar_container';
import SignUpForm from './signup_form/signup_form';
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import SocialLinks from './social_links/social_links';
import Splash from './splash/splash';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <div class="navbar">
      <NavbarContainer />
    </div>

    <AuthRoute path="/login" component={LoginForm} />
    <AuthRoute path="/signup" component={SignUpForm} />

    <Route exact path="/" component={Splash} />
    <SocialLinks />
  </div>
);

export default App;
