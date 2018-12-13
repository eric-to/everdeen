import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearErrors, logIn } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  formType: 'Sign In',
  navLink: <Link to='/signup'>Want to get started?</Link>,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(logIn(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
