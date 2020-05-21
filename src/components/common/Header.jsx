import React from 'react';
import { NavLink } from 'react-router-dom';
import routeMap from 'routeMap';
import 'styles/header.scss';

const Header = () => {
  return (
    <nav className="nav">
      {routeMap
        .filter(route => route.show)
        .map((route, index) => (
          <NavLink
            key={index}
            to={route.path}
            className="nav-link"
            activeClassName="active"
          >
            {route.title}
          </NavLink>
        ))}
    </nav>
  );
};

export default Header;
