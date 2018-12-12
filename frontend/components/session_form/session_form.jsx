import React from 'react';

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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <br/>
          {nameFields()}
          <label>Email:
            <input type="text" onChange={this.update('email')} />
          </label>
          <label>Password:
            <input type="password" onChange={this.update('password')} />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>

        <div>
          {this.props.navLink}
        </div>
      </div>
    );
  }
}

export default SessionForm;
