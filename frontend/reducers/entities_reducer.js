import { combineReducers } from 'redux';

import newsReducer from './news_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  news: newsReducer
});

export default entitiesReducer;
