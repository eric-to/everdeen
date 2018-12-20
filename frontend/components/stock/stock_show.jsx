import React from 'react';

import NavbarContainer from '../navbar/navbar_container';
import NewsfeedContainer from '../dashboard/newsfeed_container';
import SidebarContainer from '../dashboard/sidebar_container';
import StockChart from '../stock_chart';

class StockShow extends React.Component {
  componentDidMount() {
    const ticker = this.props.match.params.ticker;
    if (!this.props.stock) {
      this.props.fetchStockInfo(ticker);
    }
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <div className="dashboard-container">
          <StockChart
            intradayData={this.props.intradayData}
            oneMonthData={this.props.monthData}
            threeMonthData={this.props.threeMonthsData}
            yearData={this.props.yearData}
            fiveYearData={this.props.fiveYearsData}
            ceo={this.props.ceo}
            companyName={this.props.companyName}
            description={this.props.description}
            exchange={this.props.exchange}
            industry={this.props.industry}
            peRatio={this.props.peRatio}
            sector={this.props.sector}/>
          <NewsfeedContainer ticker={this.props.match.params.ticker} />
        </div>
        <SidebarContainer />
      </div>
    );
  }
}

export default StockShow;
