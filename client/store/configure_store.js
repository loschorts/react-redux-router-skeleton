import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = [
	thunk, 
	logger(), 
]

const reducers = {
	routing: routerReducer
}

const configureStore = (history, preloadedState = {}) => {
	return createStore(
		combineReducers(reducers),
    preloadedState,
    applyMiddleware(...middleware, routerMiddleware(history))
  );
};

export default configureStore;
