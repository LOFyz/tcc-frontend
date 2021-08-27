import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import Schedule from '../pages/Schedule';
import GroupCreation from '../pages/GroupCreation';
import Group from '../pages/Group';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/profile/:userId" component={Profile} />
    <Route path="/schedule/:userId" component={Schedule} />
    <Route path="/groupcreation" component={GroupCreation} />
    <Route path="/group/:groupId" component={Group} />
  </Switch>
);

export default Routes;
