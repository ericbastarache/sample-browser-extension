import { createStore, compose, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { alias, wrapStore } from 'react-chrome-redux';
import logic from '../logic/index';

const logicMiddleware = createLogicMiddleware(logic);

const middleware = [thunk, logicMiddleware,logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
  }) :
  compose;

const store = composeEnhancers(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer);

wrapStore(store, {
    portName: 'MY_APP'
});

chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript(null, { file: 'content.js' });
});