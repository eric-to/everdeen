import React from 'react';

class LoginForm extends React.Component {
  render() {
    return(
      <div className="login-container">
        <div className="login-image"></div>
        <div className="login-form">
          <h2>Welcome to Everdeen</h2>
          <form>
            <div className="login-label">Email or Password</div>
            <input type="text"/>
            <div className="login-label">Password</div>
            <input type="password"/>
            <div>
              <a href="">Don't have an account?</a>
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
