// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import AppContainer from './containers/AppContainer';
import Home from './components/Home';
import Watch from './components/Watch';
import Curate from './components/Curate';

import Block from './components/curate/Block';
import Show from './components/curate/Show';

const routes = (
  <Router history={browserHistory}>
    <Route component={AppContainer}>
      <Route path="/" component={Home} />
      <Route path="watch" component={Watch} />
      <Route path="curate" component={Curate} >
        <IndexRedirect to="show"/>
        <Route path="show" component={Show} />
        <Route path="block" component={Block} />
      </Route>
    </Route>
  </Router>
);

export default routes;
