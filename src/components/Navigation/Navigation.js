import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navigationLinks from '../../constants/navigation';
import IconButton from '../IconButton/IconButton';

const NavListItem = ({ location = '', slug = '', name = '' }) => (
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
    if (categories) {
      return (
        <nav className="header__nav">
          <ul className="navigation">
            <RenderNavItems links={navigationLinks.topLevel} categories={categories} location={location} />
            <li className={`navigation__item ${showSecondaryNav ? 'navigation__item--is-active' : ''}`} key="second-nav">
              <IconButton iconClassName={`fa ${showSecondaryNav ? 'fa-chevron-up' : 'fa-chevron-down'}`} className="btn btn-link" onClick={this.toggleMore}>More </IconButton>
              <nav className={`header__nav--secondary ${showSecondaryNav ? 'header__nav--secondary--is-active' : ''}`}>
                <ul className="navigation">
                  <RenderNavItems links={navigationLinks.more} categories={categories} location={location} />
                </ul>
              </nav>

            </li>
          </ul>
        </nav>
      );
    }
    return null;
  }
}

export default Navigation;
