import React, { Component } from 'react';
import IconButton from '../IconButton';
import { RenderNavItems } from './Navigation';

class DropDownNavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSecondaryNav: false,
    };
  }

  setSecondaryNav() {
    const { showSecondaryNav } = this.state;
    this.setState({
      showSecondaryNav: !showSecondaryNav,
    });
  }

  render() {
    const { showSecondaryNav } = this.state;
    const {
      location, categories, title, navLinks,
    } = this.props;
    return (
      <li className={`navigation__item ${showSecondaryNav ? 'navigation__item--is-active' : ''}`} key="second-nav">
        <IconButton iconClassName={`fa ${showSecondaryNav ? 'fa-chevron-up' : 'fa-chevron-down'}`} className="btn-link" onClick={() => this.setSecondaryNav()}>{title} </IconButton>
        <nav className={`header__nav--secondary ${showSecondaryNav ? 'header__nav--secondary--is-active' : ''}`}>
          <ul className="navigation">
            <RenderNavItems links={navLinks} categories={categories} location={location} />
          </ul>
        </nav>
      </li>
    );
  }
}

export default DropDownNavItem;
