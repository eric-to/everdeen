import * as StockActions from '../actions/stock_actions';

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // TODO: nest these items under the ticker key?
  // chain the ajax requests to make sure I can
  // get everything before I do anything else

  switch(action.type) {
    case StockActions.RECEIVE_MULTI_INTRADAY_DATA:
      newState.multiIntradayData = action.data;
      return newState;

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
      newState.description = action.info.company.description;
      newState.exchange = action.info.company.exchange;
      newState.industry = action.info.company.industry;
      newState.peRatio = action.info.quote.peRatio;
      newState.sector = action.info.company.sector;
      newState.week52High = action.info.quote["week52High"];
      newState.week52Low = action.info.quote["week52Low"];
      newState.website = action.info.company.website;
      return newState;

    default:
      return state;
  }
}

export default stocksReducer;
