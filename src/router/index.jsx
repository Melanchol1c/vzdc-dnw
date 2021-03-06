import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import donations from '../features/donations/routes';

/**
 * Application main router.
 *
 * @returns {React.FC}
 */
export default function AppRouter() {
  const routes = [...donations];
  const renderRoutes = routes.map((route) => (
    <Route
      key={route.name}
      component={route.component}
      exact={route.exact}
      path={route.path}
    />
  ));

  return (
    <Switch>
      {renderRoutes}
      <Redirect
        from="/"
        to="/donations"
      />
      <Redirect
        from="**"
        to="/"
      />
    </Switch>
  );
}
