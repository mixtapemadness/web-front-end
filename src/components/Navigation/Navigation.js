import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/index';

const Navigation = ({ location }) => (
  <nav className="header__nav">
    <ul className="navigation">
      {Object.keys(ROUTES.categories).map(i => (
        <li
          className={`navigation__item ${location.pathname === ROUTES.categories[i] ? 'navigation__item--is-active' : null}`}
          key={ROUTES.categories[i]}
        >
          <Link to={ROUTES.categories[i]}>{i}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
