import { RECEIVE_CURRENT_USER, RECEIVE_USER_INFO } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = { [action.currentUser.id]: action.currentUser };
      return Object.assign({}, state, currentUser);
    case RECEIVE_USER_INFO:
      return Object.assign({}, state, { [action.info.id]: action.info })
    default:
      return state;
  }
};

export default usersReducer;
