import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import requireAuth from './components/HOCs/RequireAuth';
import App from './components/app';
import Resources from './components/Resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {/* If our App component has children, show them!!! */}
        <Route path="resources" component={requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
