import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { fetchMultiIntradayData } from '../../actions/stock_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  multiIntradayData: state.entities.stocks.multiIntradayData
});

const mapDispatchToProps = dispatch => ({
  fetchMultiIntradayData: tickers => dispatch(fetchMultiIntradayData(tickers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
