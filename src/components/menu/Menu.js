/* eslint operator-linebreak: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react';
import styled from 'styled-components';

import MenuItem from 'components/menuItem';
import { Link } from 'react-router-dom';
import menuEnhancer from './menuEnhancer';
import { ROUTES } from '../../constants';

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #ffffff;
  height: auto;
  @media only screen and (max-width: 850px) {
    height: 1px;
    width: 100%;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 29.5px;
  letter-spacing: 1.8px;
  color: #ffffff;
  font-weight: 600;
  margin: 79px 0 46px 0;
  @media only screen and (max-width: 1050px) {
    text-align: center;
    margin: 20px 0;
  }
`;

const Menu = ({ data, toggleMenu }) => {
  const Posts = data && data.Posts && data.Posts;
  return (
    <div className="menu">
      <ContentContainer>
        <div className="menu__list">
          {Object.keys(ROUTES.categories).map((category) => {
            const catLink = ROUTES.categories[category];
            return (<li key={catLink} className="menu__list-item"><Link to={catLink}>{category}</Link></li>);
          })}
        </div>
        <div>
          <Title>Recent</Title>
          {Posts &&
            Posts.map((item, index, arr) => (
              <FlexDiv key={item.id}>
                <MenuItem toggleMenu={toggleMenu} data={item} />
                {index !== arr.length - 1 && <Divider />}
              </FlexDiv>
            ))}
        </div>
      </ContentContainer>
    </div>
  );
};
export default menuEnhancer(Menu);
