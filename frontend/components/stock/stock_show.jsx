import React from 'react';

import NavbarContainer from '../navbar/navbar_container';
import NewsfeedContainer from '../dashboard/newsfeed_container';

class StockShow extends React.Component {
  componentDidMount() {
    const ticker = this.props.match.params.ticker;
    if (!this.props.stock) {
      this.props.fetchNews(ticker);
    }
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <div className="dashboard-container">
          <NewsfeedContainer ticker={this.props.match.params.ticker} />
        </div>
      </div>
    );
  }
}

export default StockShow;
