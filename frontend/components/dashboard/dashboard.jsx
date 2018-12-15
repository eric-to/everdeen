import React from 'react';

import NewsfeedContainer from './newsfeed_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-container">
        <NewsfeedContainer />
        <div className="sidebar-container">
          <div className="sidebar">
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
