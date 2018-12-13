import React from 'react';

class SignupForm extends React.Component {
  render() {
    return (
      <div className="signup-container">
        <div className="signup-form">
          <h1>Make Your Money Move</h1>
          <h2>Everdeen lets you invest in companies you love, commission-free.</h2>
          <form>
            <div className="nameFields">
              <input type="text" />
              <input type="text" />
            </div>
            <input type="text" />
            <input type="password" />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
