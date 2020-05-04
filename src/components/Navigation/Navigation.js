import React from 'react';
import { Link } from 'react-router-dom';
import navigationLinks from '../../constants/navigation';
import navigationEnhancer from './navigationEnhancer';
import DropDownNavItem from './DropDownNavItem';
import MMTalksLogo from '../../resources/assets/img/mm-talks-logo.png';
import { MMTALKS_URL } from '../../constants';

const NavListItem = ({ location = '', slug = null, name = '' }) => (
  <li
    className={`navigation__item ${location === slug ? 'navigation__item--is-active' : ''}`}
  >
    <Link to={slug}>{ name}</Link>
  </li>
);

export const RenderNavItems = ({ links = {}, categories = [], location = '' }) => (links && Object.keys(links).map((i) => {
  const slug = links[i];
  const categoryData = categories.find(category => category.slug === i);
  return (<NavListItem location={location.pathname} slug={slug} name={categoryData ? categoryData.name : i} key={slug} />);
}));


const Navigation = ({ categories, location }) => {
  if (categories && categories.category) {
    return (
      <nav className="header__nav">
        <ul className="navigation">
          <RenderNavItems links={navigationLinks.topLevel} categories={categories.category} location={location} />
          <DropDownNavItem title="Features" categories={categories.category} location={location} navLinks={navigationLinks.features} />
          <DropDownNavItem title="More" categories={categories.category} location={location} navLinks={navigationLinks.more} />
        </ul>
        {MMTALKS_URL && <a className="advertisement--hide-desktop" href={MMTALKS_URL} target="_blank" rel="noopener noreferrer"><img src={MMTalksLogo} alt="MM Talks" width="60px" /></a>}
      </nav>
    );
  }
  return null;
};

export default navigationEnhancer(Navigation);
