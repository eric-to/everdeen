import React from 'react';

import NavbarContainer from '../navbar/navbar_container';
import NewsfeedContainer from '../dashboard/newsfeed_container';
import SidebarContainer from '../dashboard/sidebar_container';
import StockChart from '../stock_chart';
import TransactionForm from '../dashboard/transaction_form';

class StockShow extends React.Component {
  componentDidMount() {
    const ticker = this.props.match.params.ticker;
    if (!this.props.stock) {
      this.props.fetchStockInfo(ticker);
    }
  }

  componentDidUpdate(prevProps) {
    const ticker = this.props.match.params.ticker;
    if (prevProps.match.params.ticker !== ticker) {
      this.props.fetchStockInfo(ticker);
      this.props.fetchNews(ticker);
    }
  }

  render() {
    let price;
    const intradayData = this.props.intradayData;
    if (intradayData) {
      let index = intradayData.length - 1;
      for (let i = index; i > 0; i--) {
        if (intradayData[i].marketAverage !== -1) {
          price = intradayData[i].marketAverage;
        }
      }
    }

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
        <TransactionForm 
          currentUser={this.props.currentUser}
          price={price}
          createTransaction={this.props.createTransaction}
          fetchUserInfo={this.props.fetchUserInfo}
          ticker={this.props.match.params.ticker} />
      </div>
    );
  }
}

export default StockShow;
