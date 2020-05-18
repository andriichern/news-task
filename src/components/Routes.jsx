import React from 'react';
import routeMap from 'routeMap';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <main>
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
