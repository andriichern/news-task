import React from 'react';
import { NavLink } from 'react-router-dom';
import routeMap from 'routeMap';

const navStyles = {
  display: 'flex',
  alignItems: 'center',
  background: '#e8e8e8',
};

const linkStyles = {
  color: '#000',
  padding: '16px',
  textDecoration: 'none',
};

const activeLinkStyles = {
  color: 'rgba(0, 0, 0, .8)',
};

const Header = () => {
  return (
    <nav style={navStyles}>
      {routeMap.map((route, index) => (
        <NavLink
          key={index}
          to={route.path}
          style={linkStyles}
          activeStyle={activeLinkStyles}
        >
          {route.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Header;
