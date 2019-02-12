import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../views/LandingPage';

export default () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <LandingPage {...props} />} />
      </Switch>
  </BrowserRouter>
);