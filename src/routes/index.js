import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Frame from '../layouts/Frame';
import Home from '../views/Home';
import About from '../views/About';
import Fortune from '../views/Fortune';

const routes = [
  { path: '/home ',
    component: Home
  },
  { path: '/about',
    component: About
  },
  {
    path: '/fortune',
    component: Fortune
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
    // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const RouteConfig = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      {routes.map(route => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </div>
  </Router>
);

export default RouteConfig;
