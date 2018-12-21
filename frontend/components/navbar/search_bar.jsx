import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SearchSVG from '../logo/search_svg';
// All searchable IEX symbols
import symbols from './symbols.json';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", results: [] };
    this.updateQuery = this.updateQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetQuery() {
    this.setState({ query: "", results: [] });
  }

  // TODO: Clicking empty searchbar renders some results
  updateQuery(e) {
    const query = e.target.value;
    if (query.length === "") {
      // this.setState({ query: "", results: [] });
      return;
    } 
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
      this.setState({ query: "", results: [] });
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
      <div className="searchContainer">
        <SearchSVG />
        <form className="searchbar" onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="Search"
            onChange={ this.updateQuery }
            value={ this.state.query } />
        </form>
        { this.searchResults() }
      </div>
    );
  }
}

export default withRouter(SearchBar);
