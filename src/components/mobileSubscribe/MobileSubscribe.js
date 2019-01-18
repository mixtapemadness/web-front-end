import React from 'react';
import styled from 'styled-components';

import Background from 'resources/assets/img/subscribeBack.jpg';

const Container = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  max-height: ${p => (p.isSubscribed ? '200px' : '0px')};
  overflow: hidden;
  transition: 0.4s;
  transition-delay: 1s;
  display: none;
`;

const Input = styled.input`
  padding-left: 10px;
  border: none;
  background-color: #ffffff;
  outline: none;
  height: 47px;
  width: 55%;
  box-sizing: content-box;
  ::-webkit-input-placeholder {
    color: #ccc;
    font-size: 13px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
  ::-moz-placeholder {
    color: #ccc;
    font-size: 13px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
  :-ms-input-placeholder {
    color: #ccc;
    font-size: 13px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
  :-moz-placeholder {
    color: #ccc;
    font-size: 13px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
`;
const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  height: 47px;
  color: white;
  font-weight: 600;
  background-color: #ff9d00;
  border: none;
  width: 40%;
  font-size: 13px;
`;
const FlexDiv = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
`;
const Title = styled.span`
  color: #ffffff;
  font-size: 16px;
  word-break: break-word;
  font-weight: bold;
`;

const MobileSubscribe = ({ isSubscribed }) => (
  <Container isSubscribed={isSubscribed}>
    <Title>
      Subscribe to MixTape Madness for the latest news, music and upcoming
      releases
    </Title>
    <FlexDiv>
      <Input placeholder="Enter Email For Daily News" />
      <Button>Subscribe</Button>
    </FlexDiv>
  </Container>
);

export default MobileSubscribe;
