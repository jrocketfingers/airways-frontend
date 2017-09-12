import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import LoginPage from './LoginPage';
import HomePage from './HomePage';
import PilotPage from './PilotPage';
import NotFoundPage from './NotFoundPage';

class Main extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/pilot' component={PilotPage} />

        <Route path='*' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Main;
