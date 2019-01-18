/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */

import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const SectionHead = styled.span`
  padding: 0 15px;
  margin-bottom: 10px;
`;

const Title = styled.h1``;

const SubTitle = styled.h4``;

const SubTitleTxt = styled.span`
  color: #666666;
`;

const SectionContent = styled.span`
  width: 100%;
`;

const MusicSection = ({ title, subTitle, artist, children }) => (
  <SectionContainer>
    <SectionHead>
      <Title size={'36px'}>{title}</Title>
      <SubTitle>
        {subTitle} <SubTitleTxt color={'#666666'}>{artist}</SubTitleTxt>
      </SubTitle>
    </SectionHead>

    <SectionContent>{children}</SectionContent>
  </SectionContainer>
);

export default MusicSection;
