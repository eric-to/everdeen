import { RECEIVE_CURRENT_USER, SIGN_OUT_CURRENT_USER } from '../actions/session_actions'

const nullUser = { id: null }

const sessionReducer = (state = nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case SIGN_OUT_CURRENT_USER:
      return nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
