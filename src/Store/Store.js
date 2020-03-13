import thunk from 'redux-thunk';
// eslint-disable-next-line object-curly-newline
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import weather from '../Reducers/weather';
import cities from '../Reducers/cities';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    weather,
    cities
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
