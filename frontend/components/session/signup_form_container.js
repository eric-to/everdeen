import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = () => ({
  formType: 'Sign Up',
  navLink: <Link to='/logIn'>Already have an account?</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signUp(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
