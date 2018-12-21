import React from 'react';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: this.props.ticker,
      transaction_type: "buy",
      num_shares: "",
      amount: "0.00",
      marketPrice: this.props.price
    }

    this.updateNumShares = this.updateNumShares.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formHeading = this.formHeading.bind(this);
  }

  updateNumShares(e) {
    const num_shares = e.target.value;
    this.setState({
      num_shares: num_shares
    })
    

    if (num_shares === "") {
      this.setState({ amount: "0.00" })
    } else {
      this.setState({
        amount: parseFloat(num_shares) * parseFloat(this.state.marketPrice)
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const amount = Math.round(this.state.marketPrice * this.state.num_shares * 100) / 100;
    const transaction = {
      ticker: this.state.ticker,
      num_shares: parseInt(this.state.num_shares),
      transaction_type: this.state.transaction_type,
      amount: amount
    }

    this.props.createTransaction(transaction);
  }

  formHeading() {
    return (
      <div>
        <div>{`Buy ${this.state.ticker}`}</div>
      </div>
    );
  }

  formFooter() {
    const currentUser = this.props.currentUser;
    if (this.state.transaction_type === "buy") {
      return (
        <div className="form-footer">
          {`$${currentUser.buying_power_available} Buying Power Available`}
        </div>
      );
    } else {
      const stocks = currentUser.shares_owned;
      let num_shares = stocks[this.state.ticker];
      if (num_shares === null) {
        num_shares = 0
      }
      return (
        <div className="form-footer">
          {`${num_shares} Shares Available`}
        </div>
      );
    }
  }

  render() {
    return (
      <div id="sidebar-container" className="sidebar-container">
        <div id="transaction-form-container" className="sidebar">
          <form className="transaction-form" onSubmit={this.handleSubmit}>
            { this.formHeading() }
            <div className="shares">
              <div className="shares-label">Shares</div>
              <input id="shares-input" type="text" onChange={this.updateNumShares} value={this.state.num_shares} placeholder={"0"} />
            </div>
            <div className="market-price-container">
              <div className="market-price">Market Price</div>
              <div>{this.state.marketPrice}</div>
            </div>
            <div className="estimated-cost-container">
              <div className="estimated-cost">Estimated Cost</div>
              <div>{`$${this.state.amount}`}</div>
            </div>
            <div className="submit-transaction-container">
              <input id="submit-transaction" type="submit" value="Review Order" />
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
