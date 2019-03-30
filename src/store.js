import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import settings from 'reducers/settings';

const middleware = [];
const appliedMiddleware = applyMiddleware(...middleware);
const composeEnhancers = composeWithDevTools({});
const storeEnhancers = composeEnhancers(appliedMiddleware);
const rootReducer = combineReducers({
  settings
});

export default createStore(rootReducer, storeEnhancers);
