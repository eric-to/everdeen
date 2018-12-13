import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === 'Sign Up') {
      this.state = { first_name: '', last_name: '', email: '', password: '' };
    } else {
      this.state = { email: '', password: '' };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    const nameFields = () => {
      if (this.props.formType === 'Sign Up') {
        return (
          <div>
            <label>First Name
              <input type="text" onChange={this.update('first_name')} />
            </label>
            <label>Last Name
              <input type="text" onChange={this.update('last_name')} />
            </label>
          </div>
        );
      }
    };

    return (
      <div className="login-container">
        <div className="login-image"></div>
        <div className="login-form">
          <h2>Welcome to Everdeen</h2>
          <form onSubmit={this.handleSubmit}>
            {nameFields()}
            <div className="login-label">Email or Username</div>
            <input type="text" onChange={this.update('email')} />
            <div className="login-label">Password</div>
            <input type="password" onChange={this.update('password')} />
            <div>
              {this.props.navLink}
            </div>
            <input type="submit" value={this.props.formType} />
          </form>
        </div>
      </div>
    );


  }
}

export default SessionForm;
