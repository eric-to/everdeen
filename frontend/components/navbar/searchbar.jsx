import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SearchSVG from '../logo/search_svg';
// All searchable IEX symbols/tickers
import symbols from './symbols.json';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", results: [] };
    this.updateQuery = this.updateQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetQuery = this.resetQuery.bind(this);
  }

  resetQuery() {
    this.setState({ query: "", results: [] });
  }

  updateQuery(e) {
    const query = e.target.value;
    const queryExp = RegExp("^" + query, 'i');
    let results = [];
    results = symbols.filter(stock => {
      if (stock.symbol.match(queryExp) || stock.name.match(queryExp)) {
        return stock;
      }
    });
    this.setState({ query: query, results: results });
  }

  handleSubmit(e) {
    e.preventDefault();
    const results = this.state.results;
    // If the user presses enter, go to the first result
    if (results.length > 0) {
      const firstResult = this.state.results[0].symbol;
      this.props.history.push(`stocks/${firstResult}`);
    }
  }

  formatName(name) {
    if (name.length >= 50) {
      return `${name.slice(0, 50)}...`;
    } else {
      return name;
    }
  }

  searchResults() {
    let results = this.state.results;
    if (results.length > 0) {
      results = results.slice(0, 8);
      return (
        <ul className="search-results">
          <div id="search-header">Stocks</div>
          {results.map((result, i) => {
            return (
              <li key={i}>
                <Link className="result" to={`/stocks/${result.symbol}`} onClick={this.resetQuery}>
                  <div>{result.symbol}</div>
                  <div>{this.formatName(result.name)}</div>
                  <div></div>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="search-container">
        <div className="searchbar">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              onChange={this.updateQuery}
              value={this.state.query} />
          </form>
          {this.searchResults()}
        </div>
        <SearchSVG />
      </div>
    );
  }
}

export default withRouter(Searchbar);
