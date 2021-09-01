import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const { autenticated } = useAuth();

  if (!autenticated && isPrivate) {
    return <Redirect to="/signin" />;
  }
  if (autenticated && !isPrivate) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} component={Component} />;
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
