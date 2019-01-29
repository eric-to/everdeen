import React from 'react';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

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

    this.state = {
      ticker: this.props.symbol,
      transaction_type: "buy",
      num_shares: "",
      amount: "0.00",
      marketPrice: price
    }

    this.updateNumShares = this.updateNumShares.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState(this.state);
  }

  updateNumShares(e) {
    const num_shares = e.target.value;
    this.setState({
      num_shares: num_shares
    })

    this.updateAmount(e.target.value);
  }

  updateAmount(num_shares) {
    if (num_shares === "") {
      num_shares = "";
      this.setState({ amount: "0.00" });
    } else {
      let amount = Math.round((parseFloat(num_shares) * parseFloat(this.state.marketPrice)) * 100) / 100;
      this.setState({ amount });
    }
  }

  updateTransactionType(type) {
    this.setState({ transaction_type: type });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.num_shares === "") {
      return;
    }

    const amount = Math.round(this.state.marketPrice * this.state.num_shares * 100) / 100;
    const transaction = {
      ticker: this.state.ticker,
      num_shares: parseInt(this.state.num_shares),
      transaction_type: this.state.transaction_type,
      amount: amount
    }

    this.props.createTransaction(transaction);
    
    alert(`You ${ transaction.transaction_type == 'buy' ? 'bought' : 'sold' } ${transaction.ticker}!`);
  }

  formFooter() {
    const currentUser = this.props.currentUser;
    let moneyString = "";
    if (currentUser.buying_power_available) {
      moneyString = (currentUser.buying_power_available).toLocaleString('en')
    }
    if (this.state.transaction_type === "buy") {
      return (
        <div className="form-footer">
          {`$${moneyString} Buying Power Available`}
        </div>
      );
    } else {
      const stocks = currentUser.shares_owned;
      let num_shares = stocks[this.state.ticker];
      if (num_shares === null) {
        num_shares = 0
      }
      if (num_shares === 1) {
        return (
          <div className="form-footer">
            {`${num_shares} Share Available`}
          </div>
        );
      } else {
        return (
          <div className="form-footer">
            {`${num_shares === undefined ? 0 : num_shares} Shares Available`}
          </div>
        );
      }

    }
  }

  transactionButtons() {
    const generalStyles = {
      cursor: "pointer",
      fontFamily: "DinPro-Medium",
      paddingLeft: "0px"
    }
    const highlight = {
      borderBottom: "3px solid #21ce99",
      color: "#21ce99",
      cursor: "pointer",
      paddingBottom: "11.7px",
      paddingLeft: "0px"
    };

    if (this.state.transaction_type === "buy") {
      return (
        <div>
          <a
            id="buy-tag"
            className="form-tab"
            onClick={() => this.updateTransactionType("buy")}
            style={ highlight }>
            {`Buy ${this.state.ticker}`}
          </a>
          <a
            id="sell-tag"
            className="form-tab"
            onClick={() => this.updateTransactionType("sell")}
            style={ generalStyles }>
            {`Sell ${this.state.ticker}`}
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <a
            id="buy-tag"
            className="form-tab"
            onClick={() => this.updateTransactionType("buy")}
            style={generalStyles}>
            {`Buy ${this.state.ticker}`}
          </a>
          <a
            id="sell-tag"
            className="form-tab"
            onClick={() => this.updateTransactionType("sell")}
            style={ highlight }>
            {`Sell ${this.state.ticker}`}
          </a>
        </div>
      );
    }
  }

  render() {
    return (
      <div id="sidebar-container" className="sidebar-container">
        <div id="transaction-form-container" className="sidebar">
          <form className="transaction-form" onSubmit={this.handleSubmit}>
            <div className="form-tabs-container">
              <h3>
                {this.transactionButtons()}
              </h3>
            </div>
            <div className="shares">
              <div className="shares-label">Shares</div>
              <input id="shares-input" type="text" onChange={this.updateNumShares} value={this.state.num_shares} placeholder={"0"} autoComplete="off" />
            </div>
            <div className="market-price-container">
              <div className="market-price">Market Price</div>
              <div>{`$${this.state.marketPrice}`}</div>
            </div>
            <div className="estimated-cost-container">
              <div className="estimated-cost">
                { this.state.transaction_type === "buy" ? "Estimated Cost" : "Estimated Credit" }
              </div>
              <div>{`$${this.state.amount}`}</div>
            </div>
            <div className="submit-transaction-container">
              <input id="submit-transaction" type="submit" value={ this.state.transaction_type === "buy" ? "Submit Order" : "Sell" } />
            </div>
            <div className="form-footer-container">
              {this.formFooter()}
            </div>
          </form>    
        </div>
      </div>
    );
  }
}

export default TransactionForm;
