import React from 'react';
// import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === 'Sign Up') {
      this.state = { first_name: '', last_name: '', email: '', password: '' };
    } else {
      this.state = { email: '', password: '' };
    }

    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  demoLogin(e) {
    e.preventDefault();
    const demoCredentials = { email: '', password: '' };
    demoCredentials['email'] = 'peeta@bread.com'.split('');
    demoCredentials['password'] = 'mtobeiyf'.split('');

    const enterCredentials = (field) => {
      let lettersTypedSoFar = this.state[field] + demoCredentials[field].shift();
      this.setState({ [field]: lettersTypedSoFar }, () => {
        if (demoCredentials[field].length > 0) {
          setTimeout(() => enterCredentials(field), 15);
        } else {
          if (field === 'password') {
          }
        }
      });
    };

    // TODO: refactor this
    enterCredentials('email');
    enterCredentials('password');
    const demoUser = { email: 'peeta@bread.com', password: 'mtobeiyf' };
    this.setState({});
    this.setState(demoUser);
    setTimeout(() => this.props.processForm(demoUser).then(() => this.props.history.push("/")), 450);
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
          <div className="signup-inputs">
            <div>
              <div id="fname-label" className="session-label">First Name</div>
              <input id="lname-label" type="text" onChange={this.update('first_name')} />
            </div>
            <div>
              <div className="session-label">Last Name</div>
              <input type="text" onChange={this.update('last_name')} />
            </div>
          </div>
        );
      }
    };

    const welcomeMessage = () => {
      if (this.props.formType === 'Sign Up') {
        return (
          <h2>Invest in Your Future</h2>
        );
      } else {
        return (
          <h2>Welcome to Everdeen</h2>
        );
      }
    };

    const formButtons = () => {
      if (this.props.formType === 'Sign Up') {
        return (
          <input type="submit" value={'Sign Up'} />
        );
      } else {
        return (
          <div className="signin-form-buttons">
            <input type="submit" value={'Sign In'} />
            <input type="submit" value={'Demo'} onClick={this.demoLogin} />
          </div>
        );
      }
    }

    const formErrors = () => {
      if (this.props.errors.length > 0) {
        return (
          <div className="session-errors">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEpIj4KICAgIDxjaXJjbGUgY3g9IjkiIGN5PSIxMCIgcj0iOSIgZmlsbD0iIzMwMzAzMiIvPgogICAgPHRleHQgZmlsbD0iI0ZGRiIgZm9udC1mYW1pbHk9IkRJTlByby1CbGFjaywgRElOUHJvIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNzAwIiBsZXR0ZXItc3BhY2luZz0iLjA1OCI+CiAgICAgIDx0c3BhbiB4PSI2LjQwOSIgeT0iMTUiPiE8L3RzcGFuPgogICAgPC90ZXh0PgogIDwvZz4KPC9zdmc+Cg==" />
            {this.props.errors[0]}
          </div>
        );
      }
    }

    return (
      <div className="session-container">
        <div className="session-image"></div>
        <div className="session-form">
          {welcomeMessage()}
          <form onSubmit={this.handleSubmit}>
            {nameFields()}
            <div id="email-label" className="session-label">Email or Username</div>
            <input type="text" onChange={this.update('email')} value={this.state.email} />
            <div id="password-label" className="session-label">Password</div>
            <input type="password" onChange={this.update('password')} value={this.state.password} />
            <div>
              {this.props.navLink}
            </div>
            {formErrors()}
            {formButtons()}
          </form>
        </div>
      </div>
    );


  }
}

export default SessionForm;
