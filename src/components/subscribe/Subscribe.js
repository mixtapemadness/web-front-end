/* eslint react/jsx-indent: 0 */

import React from 'react';
import styled from 'styled-components';

import subscribeEnhancer from './subscribeEnhancer';

const SubscribeContainer = styled.div`
  max-width: 1200px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 1030px) {
    flex-direction: column;
    text-align: center;
  }
`;
const SubscribeThakYou = styled.div`
  max-height: ${p => (p.isSubscribed ? '400px' : '0px')};
  overflow: hidden;
  transition: 1s;
  transition-delay: 1s;
  font-weight: 800;
  font-size: 18px;
  text-align: center;
`;

const Mixtape = styled.div`
  color: #ff9d00;
`;

const SubscribeForm = styled.div`
  max-height: ${p => (!p.isSubscribed ? '400px' : '0px')};
  overflow: hidden;
  transition: 0.4s;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  @media only screen and (max-width: 1035px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Span = styled.span`
  font-weight: 600;
  word-break: break-word;
  @media only screen and (max-width: 1122px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 1035px) {
    font-size: 18px;
  }
`;
const Form = styled.form`
  display: flex;
  @media only screen and (max-width: 1020px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 1035px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Input = styled.input`
  padding-left: 10px;
  border: none;
  background-color: #eeeeef;
  outline: none;
  height: 47px;
  width: 350px;
  box-sizing: content-box;
  ::-webkit-input-placeholder {
    color: black;
    font-size: 17px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
  ::-moz-placeholder {
    color: black;
    font-size: 17px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
  :-ms-input-placeholder {
    color: black;
    font-size: 17px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
  :-moz-placeholder {
    color: black;
    font-size: 17px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
  @media only screen and (max-width: 1035px) {
    width: 100%;
    margin: 15px 0 0 0;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  height: 47px;
  margin-left: 30px;
  color: white;
  font-weight: 600;
  background-color: #ff9d00;
  border: none;
  letter-spacing: 2px;
  font-size: 20px;
  width: 200px;
  @media only screen and (max-width: 1030px) {
    margin: 10px 0px;
  }
  @media only screen and (max-width: 1035px) {
    margin: 15px 0 0 0;
  }
`;

const handleKeypress = (e, handleSubscribe) => {
  if (e.key === 'Enter') {
    handleSubscribe();
  }
};

const Subscribe = ({ handleSubscribe, handleInput, res }) => {
  const isSubscribed = !!res;
  return (
    <React.Fragment>
      <SubscribeContainer>
        <SubscribeThakYou isSubscribed={isSubscribed && isSubscribed}>
          Thank You, You have Subscribed To
          <Mixtape> Mixtape Madness</Mixtape>
        </SubscribeThakYou>
        <SubscribeForm isSubscribed={isSubscribed && isSubscribed}>
          <Span>
            Subscribe to Mixtape Madness for the
            <br />
            latest on news, music, and upcoming releases
          </Span>
          <Form onSubmit={e => e.preventDefault()}>
            <Input
              onKeyPress={e => handleKeypress(e, handleSubscribe)}
              onChange={handleInput}
              placeholder="Type Email Here..."
            />
            <Button onClick={handleSubscribe}>Subscribe</Button>
          </Form>
        </SubscribeForm>
      </SubscribeContainer>
    </React.Fragment>
  );
};

export default subscribeEnhancer(Subscribe);
