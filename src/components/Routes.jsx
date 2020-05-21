import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routeMap from 'routeMap';

const Routes = () => {
  return (
    <main>
      <Redirect from="/" to="/articles" />
      <Switch>
        {routeMap.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </main>
  );
};

export default Routes;
