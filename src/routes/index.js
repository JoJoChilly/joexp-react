import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
// import Frame from '../layouts/Frame';
import Home from '../views/Home';
// import About from '../views/About';
// import Fortune from '../views/Fortune';
// import MarkDown from '../views/MarkDown';
import Loading from '@/components/Loading';

const About = Loadable({
    loader: () => import('@/views/About'),
    loading: Loading,
});

const Fortune = Loadable({
    loader: () => import('@/views/Fortune'),
    loading: Loading,
});

const MarkDown = Loadable({
    loader: () => import('@/views/MarkDown'),
    loading: Loading,
});

const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/fortune',
        component: Fortune,
    },
    {
        path: '/markdown',
        component: MarkDown,
    },
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
            {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
        </div>
    </Router>
);

export default RouteConfig;
