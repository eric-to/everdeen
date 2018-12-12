import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Hello, this is a form!
          <br/>
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
