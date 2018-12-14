import { connect } from 'react-redux';

import Home from './home';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(mapStateToProps, null)(Home);
