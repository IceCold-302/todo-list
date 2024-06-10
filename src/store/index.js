import * as reducers from './reducers'
import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk'

const appReducers = (combineReducers(reducers));

const mids = [thunk]

if (process.env.NODE_ENV !== 'production') {
    mids.push(logger);
}

const store = createStore(appReducers, composeWithDevTools(applyMiddleware(...mids)));

store.asyncReducers = {};
 
// Closure

export const createInjectReducer = store => (key , reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(combineReducers({...reducers, ...store.asyncReducers}))
}

export const injectReducers = createInjectReducer(store);

export default store;


