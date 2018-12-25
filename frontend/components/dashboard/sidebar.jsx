import React from "react";
import { Link } from "react-router-dom";

import MiniChart from "./mini_chart";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser
  }

  componentDidMount() {
    if (this.currentUser) {
      const tickers = Object.keys(this.currentUser.shares_owned);
      this.props.fetchMultiIntradayData(tickers);
    }
  }

  render() {
    const currentUser = this.currentUser

    const stocks = [];
    if (currentUser.shares_owned) {
      const shares = currentUser.shares_owned;
      const tickers = Object.keys(shares);
      for (let i = 0; i < tickers.length; i++) {
        const stockObj = {};
        stockObj["ticker"] = tickers[i];
        let num_shares = shares[tickers[i]];
        if (num_shares <= 0) {
          continue;
        } else {
          num_shares = String(num_shares);
          if (num_shares === "1") {
            num_shares = "1 Share";
          } else {
            num_shares += " Shares";
          }
          stockObj["num_shares"] = num_shares;
        }
        stocks.push(stockObj);
      }
    }

    stocks.sort((stock1, stock2) => {
      let ticker1 = stock1.ticker.toUpperCase();
      let ticker2 = stock2.ticker.toUpperCase();
      return ticker1.localeCompare(ticker2);
    });

    const stockCard = (stock, i) => {
      const stock_prices = currentUser.current_stock_prices;

      return (
        <Link key={stock.ticker} className="stock-links" to={`/stocks/${stock["ticker"]}`}>
          <div className="stock-card-container">
            <div className="stock-card">
              <div>
                <h4 className="ticker">{stock["ticker"]}</h4>
                <div className="num-shares">{stock["num_shares"]}</div>
              </div>
              <MiniChart ticker={stock.ticker} multiIntradayData={this.props.multiIntradayData} />
              <h3 className="stock-price">{`$${stock_prices[stock["ticker"]]}`}</h3>
            </div>
          </div>
        </Link>
      );
    };

    return (
      <div className="sidebar-container">
        <div className="sidebar">

          <div className="header-card-container">
            <div className="header-card">
              <h3 id="crypto-header">Cryptocurrencies (tba)</h3>
            </div>
          </div>
          <div className="header-card-container">
            <div className="header-card">
              <h3>Stocks</h3>
            </div>
          </div>
          <div className="stocks-container">
            {stocks.map((stock, i) => stockCard(stock, i))}
          </div>

          <div id="watchlist-header" className="header-card-container">
            <div className="header-card">
              <h3>Watchlist</h3>
            </div>
          </div>

        </div>
      </div>
    );

  }
}

export default Sidebar;
