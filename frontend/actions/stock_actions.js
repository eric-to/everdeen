import * as StockAPIUtils from '../util/stock_api_util';

export const RECEIVE_STOCK_INTRADAY_DATA = 'RECEIVE_STOCK_INTRADAY_DATA';
export const RECEIVE_STOCK_MONTH_DATA = 'RECEIVE_STOCK_MONTH_DATA';
export const RECEIVE_STOCK_THREE_MONTHS_DATA = 'RECEIVE_STOCK_THREE_MONTHS_DATA';
export const RECEIVE_STOCK_YEAR_DATA = 'RECEIVE_STOCK_YEAR_DATA';
export const RECEIVE_STOCK_FIVE_YEARS_DATA = 'RECEIVE_STOCK_FIVE_YEARS_DATA';
export const RECEIVE_STOCK_COMPANY_INFO = 'RECEIVE_STOCK_COMPANY_INFO';
// export const RECEIVE_STOCK = 'RECEIVE_STOCK';

// normal action creators
const receiveStockIntradayData = (ticker, data) => ({
  type: RECEIVE_STOCK_INTRADAY_DATA,
  ticker,
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

// thunk action creators
export const fetchStockIntradayData = ticker => dispatch => (
  StockAPIUtils.fetchIntradayData(ticker)
    .then(data => dispatch(receiveStockIntradayData(ticker, data)))
);

export const fetchStockMonthData = ticker => dispatch => (
  StockAPIUtils.fetchMonthData(ticker)
    .then(data => dispatch(receiveStockMonthData(ticker, data)))
);

export const fetchStockThreeMonthsData = ticker => dispatch => (
  StockAPIUtils.fetchThreeMonthsData(ticker)
    .then(data => dispatch(receiveStockThreeMonthsData(ticker, data)))
);

export const fetchStockYearData = ticker => dispatch => (
  StockAPIUtils.fetchYearData(ticker)
    .then(data => dispatch(receiveStockYearData(ticker, data)))
);

export const fetchStockFiveYearsData = ticker => dispatch => (
  StockAPIUtils.fetchFiveYearsData(ticker)
    .then(data => dispatch(receiveStockFiveYearsData(ticker, data)))
);

export const fetchStockCompanyInfo = ticker => dispatch => (
  StockAPIUtils.fetchStockCompanyInfo(ticker)
    .then(info => dispatch(receiveStockCompanyInfo(ticker, info[ticker])))
);

export const fetchStockInfo = ticker => dispatch => ( 
  StockAPIUtils.fetchStockCompanyInfo(ticker) 
    .then(info => dispatch(receiveStockCompanyInfo(ticker, info[ticker])))
    .then(() => dispatch(fetchStockIntradayData(ticker)))
    .then(() => dispatch(fetchStockMonthData(ticker)))
    .then(() => dispatch(fetchStockThreeMonthsData(ticker)))
    .then(() => dispatch(fetchStockYearData(ticker)))
    .then(() => dispatch(fetchStockFiveYearsData(ticker)))
);
