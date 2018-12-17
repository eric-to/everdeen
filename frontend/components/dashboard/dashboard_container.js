import { connect } from 'react-redux';

import Dashboard from './dashboard';
import { fetchUserInfo } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: user => dispatch(fetchUserInfo(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
