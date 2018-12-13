import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearErrors, signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  formType: 'Sign Up',
  navLink: <Link to='/logIn'>Already have an account? Or want to demo the site?</Link>,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
