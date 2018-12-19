import { combineReducers } from 'redux';

import newsReducer from './news_reducer';
import stocksReducer from './stocks_reducer';
import usersReducer from './users_reducer';

// TODO: stocks might not be a meaningful
// name?
const entitiesReducer = combineReducers({
  users: usersReducer,
  news: newsReducer,
  stocks: stocksReducer
});

export default entitiesReducer;
