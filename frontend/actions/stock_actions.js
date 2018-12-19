import * as StockAPIUtils from '../util/stock_api_util';

export const RECEIVE_STOCK_INTRADAY_DATA = 'RECEIVE_STOCK_INTRADAY_DATA';
export const RECEIVE_STOCK_MONTH_DATA = 'RECEIVE_STOCK_MONTH_DATA';
export const RECEIVE_STOCK_THREE_MONTHS_DATA = 'RECEIVE_STOCK_THREE_MONTHS_DATA';
export const RECEIVE_STOCK_YEAR_DATA = 'RECEIVE_STOCK_YEAR_DATA';
export const RECEIVE_STOCK_FIVE_YEARS_DATA = 'RECEIVE_STOCK_FIVE_YEARS_DATA';
export const RECEIVE_STOCK_COMPANY_INFO = 'RECEIVE_STOCK_COMPANY_INFO';
export const RECEIVE_STOCK_NEWS = 'RECEIVE_STOCK_NEWS';

// normal action creators
const receiveStockIntradayData = data => ({
  type: RECEIVE_STOCK_INTRADAY_DATA,
  data
})

const receiveStockMonthData = (ticker, data) => ({
  type: RECEIVE_STOCK_MONTH_DATA,
  ticker,
  data
})

const receiveStockThreeMonthsData = (ticker, data) => ({
  type: RECEIVE_STOCK_THREE_MONTHS_DATA,
  ticker,
  data
})

const receiveStockYearData = (ticker, data) => ({
  type: RECEIVE_STOCK_YEAR_DATA,
  ticker,
  data
})

const receiveStockFiveYearsData = (ticker, data) => ({
  type: RECEIVE_STOCK_FIVE_YEARS_DATA,
  ticker,
  data
})

const receiveStockCompanyInfo = (ticker, info) => ({
  type: RECEIVE_STOCK_COMPANY_INFO,
  ticker,
  info
})

const receiveStockNews = (ticker, news) => ({
  type: RECEIVE_STOCK_NEWS,
  ticker,
  news
});

// thunk action creators
export const fetchStockIntradayData = ticker => dispatch => (
  StockAPIUtils.fetchStockIntradayData(ticker)
    .then(data => dispatch(receiveStockIntradayData(ticker, data)))
);

export const fetchStockMonthData = ticker => dispatch => (
  StockAPIUtils.fetchStockMonthData(ticker)
    .then(data => dispatch(receiveStockMonthData(ticker, data)))
);

export const fetchStockThreeMonthsData = ticker => dispatch => (
  StockAPIUtils.fetchStockThreeMonthsData(ticker)
    .then(data => dispatch(receiveStockThreeMonthsData(ticker, data)))
);

export const fetchStockYearData = ticker => dispatch => (
  StockAPIUtils.fetchStockYearData(ticker)
    .then(data => dispatch(receiveStockYearData(ticker, data)))
);

export const fetchStockFiveYearsData = ticker => dispatch => (
  StockAPIUtils.fetchStockFiveYearsData(ticker)
    .then(data => dispatch(receiveStockFiveYearsData(ticker, data)))
);

export const fetchStockCompanyInfo = ticker => dispatch => (
  StockAPIUtils.fetchStockCompanyInfo(ticker)
    .then(info => dispatch(receiveStockCompanyInfo(tick, info)))
);

export const fetchStockNews = ticker => dispatch => (
  StockAPIUtils.fetchStockNews(ticker)
    .then(news => dispatch(receiveStockNews(ticker, news.articles)))
);
