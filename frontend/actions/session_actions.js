import * as SessionAPIUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGN_OUT_CURRENT_USER = 'SIGN_OUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// normal action creators
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const signOutCurrentUser = () => ({
  type: SIGN_OUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// thunk action creators
export const signUp = user => dispatch => (
  SessionAPIUtils.signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const signIn = user => dispatch => (
  SessionAPIUtils.signIn(user)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const signOut = () => dispatch => (
  SessionAPIUtils.signOut()
    .then(() => dispatch(signOutCurrentUser()))
);
