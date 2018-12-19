import * as StockActions from '../actions/stock_actions';

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // TODO: nest these items under the ticker key?
  // chain the ajax requests to make sure I can
  // get everything before I do anything else

  switch(action.type) {
    case StockActions.RECEIVE_STOCK_INTRADAY_DATA:
      newState.intradayData = action.data;
      return newState;

    case StockActions.RECEIVE_STOCK_MONTH_DATA:
      newState.monthData = action.data;
      return newState;

    case StockActions.RECEIVE_STOCK_THREE_MONTHS_DATA:
      newState.threeMonthsData = action.data;
      return newState;

    case StockActions.RECEIVE_STOCK_YEAR_DATA:
      newState.yearData = action.data;
      return newState;

    case StockActions.RECEIVE_STOCK_FIVE_YEARS_DATA:
      newState.fiveYearsData = action.data;
      return newState;

    case StockActions.RECEIVE_STOCK_COMPANY_INFO:
      newState.ceo = action.info.company.CEO;
      newState.companyName = action.info.quote.companyName;
      return newState;

    default:
      return state;
  }
}

export default stocksReducer;
