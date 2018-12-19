import { connect } from 'react-redux';

import StockShow from './stock_show';
import { fetchNews } from '../../actions/news_actions';

import {
  fetchStockIntradayData,
  fetchStockMonthData,
  fetchStockThreeMonthsData,
  fetchStockYearData,
  fetchStockFiveYearsData,
  fetchStockCompanyInfo,
  fetchStockNews,
  fetchStock
} from '../../actions/stock_actions';

// TODO: Refactor to nest stock-related state under the ticker key
// for nicer code
const mapStateToProps = (state, ownProps) => ({
  news: state.entities.news,
  stock: state.entities.stocks[ownProps.match.params.ticker],
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchStockIntradayData: ticker => dispatch(fetchStockIntradayData(ticker)),
  fetchStockMonthData: ticker => dispatch(fetchStockMonthData(ticker)),
  fetchStockThreeMonthsData: ticker => dispatch(fetchStockThreeMonthsData(ticker)),
  fetchStockYearData: ticker => dispatch(fetchStockYearData(ticker)),
  fetchStockFiveYearsData: ticker => dispatch(fetchStockFiveYearsData(ticker)),
  fetchStockCompanyInfo: ticker => dispatch(fetchStockCompanyInfo(ticker)),
  fetchNews: ticker => dispatch(fetchNews(ticker)),
  fetchStock: ticker => dispatch(fetchStock(ticker))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockShow);
