import * as StockActions from '../actions/stock_actions';

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case StockActions.RECEIVE_STOCK_INTRADAY_DATA:
      // newState[action.ticker].intradayData = action.data;
      newState[action.ticker] = action.data;
      return newState;
    case StockActions.RECEIVE_STOCK_MONTH_DATA:
      newState[action.ticker].monthData = action.data;
      return newState;
    case StockActions.RECEIVE_STOCK_THREE_MONTHS_DATA:
      newState[action.ticker].threeMonthsData = action.data;
      return newState;
    case StockActions.RECEIVE_STOCK_YEAR_DATA:
      newState[action.ticker].yearData = action.data;
      return newState;
    case StockActions.RECEIVE_STOCK_FIVE_YEARS_DATA:
      newState[action.ticker].fiveYearsData = action.data;
      return newState;
    case StockActions.RECEIVE_STOCK_COMPANY_INFO:
      newState[action.ticker].marketCap = action.info.quote.marketCap;
      newState[action.ticker].description = action.info.company.description;
      newState[action.ticker].ceo = action.info.company.CEO;
      newState[action.ticker].exchange = action.info.company.exchange;

      return newState;
    case StockActions.RECEIVE_STOCK_NEWS:
      newState[action.ticker].news = action.news;
      return newState; 
    default:
      return state;
  }
}

export default stocksReducer;
