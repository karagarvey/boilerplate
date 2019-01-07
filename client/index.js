import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import '../public/index.css'

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* // <Router history={history}>
    //   <Route path='/' component={App} />
    // </Router>, */}
  </Provider>,
  document.getElementById('app')
);
