import React from 'react';
import styled, { keyframes } from 'styled-components';
import { RESPONSIVE_BREAKPOINTS } from '../../constants';

import Shimmer from './shimmer';

const shine = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0; 
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-width: 300px;
  height: auto;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
  position: relative;
  margin: 7px;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    margin: 7px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 13px 18px;
`;

const Avatar = styled(Shimmer)`
  width: 100%;
  padding-top: 60%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 500px;
  display: inline-block;
  position: relative;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shine};
  animation-timing-function: linear;
`;

const CardLoader = ({ height }) => (
  <Container height={height} className="card-loader">
    <Avatar />
    <Info>
      <Shimmer size={12} fullWidth />
      <Shimmer mt={12} size={12} fullWidth />
      <Shimmer mt={12} size={12} fullWidth />
      <Shimmer mt={12} size={12} fullWidth />
      <Shimmer size={30} mt={15} fullWidth />
    </Info>
  </Container>
);

export default CardLoader;
