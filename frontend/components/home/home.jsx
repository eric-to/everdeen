import React from 'react';

import NavbarContainer from '../navbar/navbar_container';
import Splash from '../splash/splash';

class Home extends React.Component {
  render() {
    if (this.props.currentUser) {
      return (
        <div>
          {/* Logged in */}
          <NavbarContainer />
        </div>
      );
    } else {
      return (
        <div>
          {/* Logged out */}
          <NavbarContainer />
          {/* Splash page */}
          <Splash />
        </div>
      )
    }
  }
}

export default Home;
