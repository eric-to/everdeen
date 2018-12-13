import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logIn } from '../../actions/session_actions'; 
import SessionForm from './session_form';

const mapStateToProps = () => ({
  formType: 'Sign In',
  navLink: <Link to='/signup'>Want to get started?</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(logIn(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
