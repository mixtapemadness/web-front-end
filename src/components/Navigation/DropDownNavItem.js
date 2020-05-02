import React, { useState } from 'react';
import IconButton from '../IconButton';
import { RenderNavItems } from './Navigation';

const DropDownNavItem = (props) => {
  const {
    location, categories, title, navLinks,
  } = props;
  const [showSecondaryNav, setSecondaryNav] = useState(false);
  return (
    <li className={`navigation__item ${showSecondaryNav ? 'navigation__item--is-active' : ''}`} key="second-nav">
      <IconButton iconClassName={`fa ${showSecondaryNav ? 'fa-chevron-up' : 'fa-chevron-down'}`} className="btn-link" onClick={() => setSecondaryNav(!showSecondaryNav)}>{title} </IconButton>
      <nav className={`header__nav--secondary ${showSecondaryNav ? 'header__nav--secondary--is-active' : ''}`}>
        <ul className="navigation">
          <RenderNavItems links={navLinks} categories={categories} location={location} />
        </ul>
      </nav>
    </li>
  );
};

export default DropDownNavItem;
