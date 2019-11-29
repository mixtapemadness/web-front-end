import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navigationLinks from '../../constants/navigation';
import IconButton from '../IconButton/IconButton';
import navigationEnhancer from './navigationEnhancer';
import MMTalksLogo from '../../resources/assets/img/mm-talks-logo.png';
import { MMTALKS_URL } from '../../constants';

const NavListItem = ({ location = '', slug = null, name = '' }) => (
  <li
    className={`navigation__item ${location === slug ? 'navigation__item--is-active' : ''}`}
  >
    <Link to={slug}>{ name}</Link>
  </li>
);

const RenderNavItems = ({ links = [], categories = [], location = '' }) => (links && Object.keys(links).map((i) => {
  const slug = links[i];
  const categoryData = categories.find(category => category.slug === i);
  return (<NavListItem location={location.pathname} slug={slug} name={categoryData ? categoryData.name : i} key={slug} />);
}));


class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      showSecondaryNav: false,
    };
  }

  toggleMore = () => {
    const { showSecondaryNav } = this.state;
    this.setState({
      showSecondaryNav: !showSecondaryNav,
    });
  }

  render() {
    const { location, categories } = this.props;
    const { showSecondaryNav } = this.state;
    if (categories && categories.category) {
      return (
        <nav className="header__nav">
          <ul className="navigation">
            <RenderNavItems links={navigationLinks.topLevel} categories={categories.category} location={location} />
            <li className={`navigation__item ${showSecondaryNav ? 'navigation__item--is-active' : ''}`} key="second-nav">
              <IconButton iconClassName={`fa ${showSecondaryNav ? 'fa-chevron-up' : 'fa-chevron-down'}`} className="btn-link" onClick={this.toggleMore}>More </IconButton>
              <nav className={`header__nav--secondary ${showSecondaryNav ? 'header__nav--secondary--is-active' : ''}`}>
                <ul className="navigation">
                  <RenderNavItems links={navigationLinks.more} categories={categories.category} location={location} />
                </ul>
              </nav>
            </li>
          </ul>
          {MMTALKS_URL && <a className="advertisement--hide-desktop" href={MMTALKS_URL} target="_blank" rel="noopener noreferrer"><img src={MMTalksLogo} alt="MM Talks" width="60px" /></a>}
        </nav>
      );
    }
    return null;
  }
}

export default navigationEnhancer(Navigation);
