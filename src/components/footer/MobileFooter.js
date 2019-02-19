import React from 'react';
import styled from 'styled-components';
import SocialIcons from 'components/SocialIcons/';
import { RESPONSIVE_BREAKPOINTS } from '../../constants';
import FooterLinks from './FooterLinks';

const MobileFooterContainer = styled.div`
  padding: 20px 0;
  display: block;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const MobileContentContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #000000;
  text-align: center;
`;
const MobileFooter = ({ menuOpened }) => (
  <MobileFooterContainer>
    <SocialIcons menuOpened={menuOpened} />
    <MobileContentContainer jc menuOpened={menuOpened}>
      <FooterLinks />
    </MobileContentContainer>
  </MobileFooterContainer>
);

export default MobileFooter;
