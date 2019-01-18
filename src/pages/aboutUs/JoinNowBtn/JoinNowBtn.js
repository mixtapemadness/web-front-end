import React from 'react';
import styled from 'styled-components';

const JoinNowBtnContainer = styled.div`
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  margin-top: 50px;
  width: 190px;
  height: 50px;
  font-size: 33.5px;
  letter-spacing: 2px;
  border-radius: 13.3px;
  border: solid 2px #f7941d;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 760px) {
    width: 150px;
    height: 40px;
    font-size: 18.5px;
  }
`;

export default () => <JoinNowBtnContainer>Join Now</JoinNowBtnContainer>;
