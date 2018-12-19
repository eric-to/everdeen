import * as StockActions from '../actions/stock_actions';

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // TODO: nest these items under the ticker key?
  // chain the ajax requests to make sure I can
  // get everything before I do anything else

  switch(action.type) {
    case StockActions.RECEIVE_STOCK_INTRADAY_DATA:
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
      // grab company info
      return newState;

    default:
      return state;
  }
}

export default stocksReducer;
