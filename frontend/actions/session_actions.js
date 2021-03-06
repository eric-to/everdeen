import * as SessionAPIUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';

// normal action creators
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logOutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

const receiveUserInfo = info => ({
  type: RECEIVE_USER_INFO,
  info
});

// thunk action creators
export const signUp = user => dispatch => (
  SessionAPIUtils.signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const logIn = user => dispatch => (
  SessionAPIUtils.logIn(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const logOut = () => dispatch => (
  SessionAPIUtils.logOut()
    .then(() => dispatch(logOutCurrentUser()),
          err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const fetchUserInfo = user => dispatch => (
  SessionAPIUtils.fetchUserInfo(user)
    .then(info => dispatch(receiveUserInfo(info)))
);
