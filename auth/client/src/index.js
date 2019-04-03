import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from "./components/app";
import Welcome from './components/welcome';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';

import Feature from './components/feature';
import SignOut from './components/auth/signout';

import reducers from './reducers';

import './styles/main.css';

const store = createStore(
  reducers, 
  {
    auth: { authenticated: localStorage.getItem('token') }
  }, 
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signin" component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
