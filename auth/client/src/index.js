import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import reduxThunk from 'redx-thunk';

import App from "./components/app";
import Welcome from './components/welcome';
import Signup from './components/auth/signup';
import reducers from './reducers';

const store = createStore(reducers, {});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);