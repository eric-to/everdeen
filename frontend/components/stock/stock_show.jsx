import React from 'react';

import StockChart from '../stock_chart';
import NavbarContainer from '../navbar/navbar_container';
import NewsfeedContainer from '../dashboard/newsfeed_container';

class StockShow extends React.Component {
  componentDidMount() {
    const ticker = this.props.match.params.ticker;
    if (!this.props.stock) {
      this.props.fetchStockIntradayData(ticker);
    }
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <div className="dashboard-container">
          <StockChart stock={this.props.stock} />
          <NewsfeedContainer ticker={this.props.match.params.ticker} />
        </div>
      </div>
    );
  }
}

export default StockShow;
