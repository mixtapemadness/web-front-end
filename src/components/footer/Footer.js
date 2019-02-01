/* eslint jsx-quotes: 0 */
/* eslint react/jsx-first-prop-new-line: 0 */
/* eslint react/jsx-closing-tag-location: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import styled from 'styled-components';


import SocialIcons from 'components/SocialIcons';
import { CLOSE_MEGAMENU, SOCIAL_MEDIA, ROUTES } from 'constants';
import MobileFooter from './MobileFooter';
import FooterLinks from './FooterLinks';
import { RESPONSIVE_BREAKPOINTS } from '../../constants';

const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f1f3f5;
  margin-top: 50px;
  display:none;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    display: block;
  }
`;

const ContentContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const FlexDiv = styled.div`
margin: 20px 0;
  display: flex;
  flex-direction: column;
    justify-content: center;
    text-align:center;
  width: 100%;
`;

const ListContainer = styled.div`
  ${props => props.mr && `margin-right: ${props.mr}px`};
`;

const ContentHeader = styled.span`
  font-size: 16px;
  color: #000000;
  font-weight: 600;
`;

const SignUpContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  height: 45px;
  width: 160px;
  border: 1px solid ${p => (p.menuOpened ? '#ffffff' : '#000000')};
  padding-left: 15px;
  border-right: 0;
  outline: none;
  background-color: transparent;
  font-size: 12px;
  box-sizing: content-box;
  ::-webkit-input-placeholder {
    font-size: 10.5px;
    color: ${p => (p.menuOpened ? '#ffffff' : 'rgba(0, 0, 0, 0.8)')};
    font-weight: 600;
  }
  ::-moz-placeholder {
    font-size: 10.5px;
    color: ${p => (p.menuOpened ? '#ffffff' : 'rgba(0, 0, 0, 0.8)')};
    font-weight: 600;
  }
  :-ms-input-placeholder {
    font-size: 10.5px;
    color: ${p => (p.menuOpened ? '#ffffff' : 'rgba(0, 0, 0, 0.8)')};
    font-weight: 600;
  }
  :-moz-placeholder {
    font-size: 10.5px;
    color: ${p => (p.menuOpened ? '#ffffff' : 'rgba(0, 0, 0, 0.8)')};
    font-weight: 600;
  }
`;
const SignUpButton = styled.button`
  height: 47px;
  width: 100px;
  background-color: ${p => (p.menuOpened ? '#ffffff' : '#000000')};
  color: ${p => (p.menuOpened ? '#ff9600' : '#ffffff')};
  border: 1px solid black;
  border-left: none;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  box-sizing: content-box;
  border: 0;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: '#979797';
`;
const Flex = styled.div`
  display: flex;
`;
const Span = styled.span`
  font-weight: 600;
  ${props => props.fsize && `font-size: ${props.fsize}px`};
  ${props => props.color && `color: ${props.color}`};
  ${props => props.mr && `margin-right: ${props.mr}px;`}
  ${props => props.ml && `margin-left: ${props.ml}px;`}
  ${props => props.mt && `margin-top: ${props.mt}px;`}
  ${props => props.mb && `margin-bottom: ${props.mb}px;`}
`;

const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = ({ width, menuOpened }) => (
  <div>
    <FooterContainer menuOpened={menuOpened}>
      <ContentContainer>
        <ListContainer>
          <FooterLinks />
        </ListContainer>
        <NewsletterContainer>
          <ContentHeader menuOpened={menuOpened}>
            Sign up to our newsletter
          </ContentHeader>
          <SignUpContainer>
            <Input
              placeholder="email@example.com"
              menuOpened={menuOpened}
            />
            <SignUpButton menuOpened={menuOpened}>SIGN UP</SignUpButton>
          </SignUpContainer>
          <SocialIcons menuOpened={menuOpened} />
          <Line mb={10} menuOpened={menuOpened} />
        </NewsletterContainer>
      </ContentContainer>
    </FooterContainer>
    <FlexDiv>
      <Span fsize={12} color="#000000">
        Copyright &copy; Mixtape Madness.
      </Span>
    </FlexDiv>
    <MobileFooter menuOpened={menuOpened} />
  </div>
);

export default Footer;
