import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomeContainer from './home/home_container';
import SignInFormContainer from './session/signin_form_container';
import SignUpFormContainer from './session/signup_form_container';
import StockShowContainer from './stock/stock_show_container';
import { AuthRoute } from '../util/route_util';

// TODO: Add ProtectedRoute to ensure only logged in users can access some features
const App = () => (
  <div className="app">
    <Switch>
      {/* Home page */}
      <Route exact path="/" component={HomeContainer} />
      {/* Stock detail page */}
      <Route exact path="/stocks/:ticker" component={StockShowContainer} />
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
