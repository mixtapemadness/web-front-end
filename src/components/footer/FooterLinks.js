import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

const FooterLinks = () => (
  <ul className="footer__links">
    <li>
      <Link to={ROUTES.about}>About Us</Link>
    </li>
    <li>
      <Link to={ROUTES.termsAndConditions}>Terms & Conditions</Link>
    </li>
    <li>
      <Link to={ROUTES.privacyPolicy}>Privacy Policy</Link>
    </li>
    <li>
      <Link to={ROUTES.faqs}>FAQs</Link>
    </li>
    <li>
      <Link to={ROUTES.contactUs}>Contact Us</Link>
    </li>
  </ul>
);

export default FooterLinks;
