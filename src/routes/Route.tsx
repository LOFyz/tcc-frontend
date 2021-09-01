import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { isAutenticated } from '../contexts/auth';

interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  if (!isAutenticated() && isPrivate) {
    return <Redirect to="/signin" />;
  }
  if (isAutenticated() && !isPrivate) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} component={Component} />;
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
