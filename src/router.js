import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/Verification';
import later from './routes/Later';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="later" component={later} />
    </Router>
  );
}

export default RouterConfig;