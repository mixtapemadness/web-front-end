/* eslint operator-linebreak: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import fifaLogo from 'resources/assets/img/competition/fifa-blacklockup.png';

import menuEnhancer from './menuEnhancer';
import SocialIcons from '../SocialIcons';
import Navigation from '../Navigation';
import FooterLinks from '../footer/FooterLinks';
import { ROUTES } from '../../constants/index';


const Menu = ({ menuOpened }) => (
  <div>
    <div className={`menu ${menuOpened ? 'menu--is-open' : ''}`}>
      <div className="menu__container">
        <div className="menu__section">
          <h3 className="menu__title">Explore MM</h3>
          <div className="menu__nav">
            <Navigation toggleMenu={menuOpened} />
            <Link to={ROUTES.competitionPage}>
              <img src={fifaLogo} alt="FIFA eWorldCup" />
            </Link>
          </div>
        </div>
        <div className="menu__section">
          <h3 className="menu__title">Help & Info</h3>
          <div className="menu__nav">
            <FooterLinks />
          </div>
        </div>
        <div className="menu__section">
          <h3 className="menu__title">Follow Us</h3>
          <SocialIcons />
        </div>
      </div>

    </div>
    <div className="menu__overlay" />
  </div>
);
export default menuEnhancer(Menu);
