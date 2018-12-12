import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signIn } from '../../actions/session_actions'; 
import SessionForm from './session_form';

const mapStateToProps = () => ({
  formType: 'signIn',
  navLink: <Link to='/signup'>Don't have an account?</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signIn(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
