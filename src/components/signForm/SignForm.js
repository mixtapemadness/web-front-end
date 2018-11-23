/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */
import React from 'react'
import styled from 'styled-components'

import BackgroundImage from 'resources/assets/img/music.jpg'

import LogIn from './LogIn'
import Register from './Register'
import NewsLetter from './NewsLetter'

const Div = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 140px;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  position: relative;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 20px;
  background-image: url(${BackgroundImage});
  height: 500px;
  background-repeat: no-repeat;
  background-size: 60% 100%;
  @media only screen and (max-width: 925px) {
    background-size: cover;
    display: flex;
    align-items: flex-end;
  }
`

const FormContainer = styled.div`
  color: #ffffff;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  z-index: 1;
`

const Title = styled.span`
  font-size: 26.5px;
  letter-spacing: 1.6px;
`

const ContentContainer = styled.div`
  width: 40%;
  background-color: #f29700;
  position: absolute;
  right: 0;
  height: 500px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 925px) {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(242, 151, 0, 0.7);
  }
  ::before {
    content: ' ';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #f29700;
    transform-origin: bottom left;
    -ms-transform: skew(35deg, 0deg);
    -webkit-transform: skew(35deg, 0deg);
    transform: skew(35deg, 0deg);
    @media only screen and (max-width: 925px) {
      display: none;
    }
  }
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  right: 34px;
  span {
    color: #ffffff;
    font-size: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-left: 10px;
  }
  @media only screen and (max-width: 925px) {
    width: 100%;
    text-align: center;
    right: 0;
  }
`

const SignForm = ({ type }) => (
  <Div>
    <Container>
      <ContentContainer>
        {type === 'login' && <LogIn />}
        {type === 'register' && <Register />}
        {type === 'newsletter' && <NewsLetter />}
        {type === 'thanks' && (
          <FormContainer>
            <Title>Thank You For Registering</Title>
          </FormContainer>
        )}
        <Footer>
          <span>Help</span>
          <span>Terms</span>
          <span>Privacy</span>
        </Footer>
      </ContentContainer>
    </Container>
  </Div>
)

export default SignForm
