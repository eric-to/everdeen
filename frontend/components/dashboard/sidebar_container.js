import { connect } from 'react-redux';

import Sidebar from './sidebar';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(
  mapStateToProps,
  null  
)(Sidebar);
