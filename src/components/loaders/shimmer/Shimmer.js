/* eslint implicit-arrow-linebreak: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const shine = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0; 
  }
`;

const Placeholder = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative; 
  animation-duration: 1.5s;
  animation-fill-mode: forwards; 
  animation-iteration-count: infinite;
  animation-name: ${shine};
  animation-timing-function: linear;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  flex-shrink: 0;

  ${p =>
    p.circle &&
    css`
      border-radius: 50%;
    `}

  ${p =>
    p.text &&
    css`
      width: 70%;
      margin: 8px;
      display: inline-block;
      height: 10px;
    `}

  ${p =>
    p.resp &&
    css`
      @media only screen and (max-width: 450px) {
        width: 53%;
      }

      @media only screen and (max-width: 360px) {
        width: 40%;
      }
    `};

  ${p =>
    p.size &&
    css`
      width: ${p.size}px;
      height: ${p.size}px;
    `}
  ${p => p.fullWidth && 'width: 100%'};
  ${p => p.w && `width: ${p.w}%`};
  
  ${p => p.ml && `margin-left: ${p.ml}px`};
  ${p => p.mr && `margin-right: ${p.mr}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.nom && 'margin: 0'};
`;

const Shimmer = props => <Placeholder {...props} />;

export default Shimmer;
