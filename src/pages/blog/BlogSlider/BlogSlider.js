import React from 'react';
import styled from 'styled-components';

const NewsSlliderContainer = styled.div`
  width: 100%;
  flex-direction: column;
`;

const SlliderImg = styled.div`
  width: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`;

const NewsSlliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  text-align: center;
`;
export default ({ img, text }) => (
  <NewsSlliderContainer>
    <SlliderImg src={img}>
      <NewsSlliderWrapper>{text}</NewsSlliderWrapper>
    </SlliderImg>
  </NewsSlliderContainer>
);
