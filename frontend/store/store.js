import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(thunk, logger) <- only for development use
    applyMiddleware(thunk, logger)
  )
};

export default configureStore;
