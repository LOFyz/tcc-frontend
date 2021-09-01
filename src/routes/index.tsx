import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import Schedule from '../pages/Schedule';
import GroupCreation from '../pages/GroupCreation';
import Group from '../pages/Group';
import Route from './Route';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/profile/:userId" component={Profile} isPrivate />
      <Route path="/schedule/:userId" component={Schedule} isPrivate />
      <Route path="/groupcreation" component={GroupCreation} isPrivate />
      <Route path="/group/:groupId" component={Group} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
