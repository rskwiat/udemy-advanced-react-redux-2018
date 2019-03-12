import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async';
import stateValidators from 'middlewares/stateValidators';
import reducers from 'reducers';


export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers, 
    initialState, 
    applyMiddleware(async, stateValidators)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}