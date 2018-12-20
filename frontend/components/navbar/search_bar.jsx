import React from 'react';
import { withRouter } from 'react-router-dom';

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
      this.setState({ query: "", results: [] });
    }
  }

  render() {
    return (
      <div>
        {/* <SearchSVG /> */}
        <form className="searchbar" onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="Search"
            onChange={ this.updateQuery }
            value={ this.state.query } />
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
