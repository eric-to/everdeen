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
  fetchStockInfo
} from '../../actions/stock_actions';

// TODO: Refactor the stock state to make it easier
// to work with
const mapStateToProps = (state, ownProps) => ({
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
  sector: state.entities.stocks.sector
});

const mapDispatchToProps = dispatch => ({
  fetchStockIntradayData: ticker => dispatch(fetchStockIntradayData(ticker)),
  fetchStockMonthData: ticker => dispatch(fetchStockMonthData(ticker)),
  fetchStockThreeMonthsData: ticker => dispatch(fetchStockThreeMonthsData(ticker)),
  fetchStockYearData: ticker => dispatch(fetchStockYearData(ticker)),
  fetchStockFiveYearsData: ticker => dispatch(fetchStockFiveYearsData(ticker)),
  fetchStockCompanyInfo: ticker => dispatch(fetchStockCompanyInfo(ticker)),
  fetchNews: ticker => dispatch(fetchNews(ticker)),
  fetchStockInfo: ticker => dispatch(fetchStockInfo(ticker))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockShow);
