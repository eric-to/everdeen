import { connect } from 'react-redux';

import StockShow from './stock_show';
import { createTransaction } from '../../actions/transaction_actions';
import { fetchNews } from '../../actions/news_actions';
import { fetchUserInfo } from '../../actions/session_actions';

import {
  fetchStockIntradayData,
  fetchStockMonthData,
  fetchStockThreeMonthsData,
  fetchStockYearData,
  fetchStockFiveYearsData,
  fetchStockCompanyInfo,
  fetchStockInfo
} from '../../actions/stock_actions';

// TODO: Refactor the stock state to make it easier
// to work with
const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  news: state.entities.news,
  intradayData: state.entities.stocks.intradayData,
  monthData: state.entities.stocks.monthData,
  threeMonthsData: state.entities.stocks.threeMonthsData,
  yearData: state.entities.stocks.yearData,
  fiveYearsData: state.entities.stocks.fiveYearsData,
  ceo: state.entities.stocks.ceo,
  companyName: state.entities.stocks.companyName,
  description: state.entities.stocks.description,
  exchange: state.entities.stocks.exchange,
  industry: state.entities.stocks.industry,
  peRatio: state.entities.stocks.peRatio,
  sector: state.entities.stocks.sector,
  symbol: state.entities.stocks.symbol,
  week52High: state.entities.stocks.week52High,
  week52Low: state.entities.stocks.week52Low,
  website: state.entities.stocks.website
});

const mapDispatchToProps = dispatch => ({
  fetchStockIntradayData: ticker => dispatch(fetchStockIntradayData(ticker)),
  fetchStockMonthData: ticker => dispatch(fetchStockMonthData(ticker)),
  fetchStockThreeMonthsData: ticker => dispatch(fetchStockThreeMonthsData(ticker)),
  fetchStockYearData: ticker => dispatch(fetchStockYearData(ticker)),
  fetchStockFiveYearsData: ticker => dispatch(fetchStockFiveYearsData(ticker)),
  fetchStockCompanyInfo: ticker => dispatch(fetchStockCompanyInfo(ticker)),
  fetchNews: ticker => dispatch(fetchNews(ticker)),
  fetchStockInfo: ticker => dispatch(fetchStockInfo(ticker)),
  createTransaction: transaction => dispatch(createTransaction(transaction)),
  fetchUserInfo: user => dispatch(fetchUserInfo(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockShow);
