import React from 'react'
import styled from 'styled-components'

import signUpEnhancer from './signUpEnhancer'

const FormContainer = styled.div`
  color: #ffffff;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  z-index: 1;
  @media only screen and (max-width: 925px) {
    align-items: center;
  }
`
const Title = styled.span`
  font-size: 26.5px;
  letter-spacing: 1.6px;
`
const Input = styled.input`
  color: #ffffff;
  font-size: 15.5px;
  letter-spacing: 0.9px;
  background: transparent;
  border: none;
  outline: none;
  font-weight: bold;
  ${p => p.mt && `margin-top: ${p.mt}px`};
  border-bottom: 2px solid rgb(255, 255, 255, 0.5);
  ::-webkit-input-placeholder {
    color: #ffffff;
    font-weight: bold;
    font-size: 15.5px;
    letter-spacing: 0.9px;
  }
  ::-moz-placeholder {
    color: #ffffff;
    font-weight: bold;
    font-size: 15.5px;
    letter-spacing: 0.9px;
  }
  :-ms-input-placeholder {
    color: #ffffff;
    font-weight: bold;
    font-size: 15.5px;
    letter-spacing: 0.9px;
  }
  :-moz-placeholder {
    color: #ffffff;
    font-weight: bold;
    font-size: 15.5px;
    letter-spacing: 0.9px;
  }
`
const Button = styled.button`
  border: 2px solid #ffffff;
  background: transparent;
  color: #ffffff;
  margin-top: 17px;
  width: fit-content;
  padding: 0px 10px;
  border-radius: 9px;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.mr && `margin-right: ${p.mr}px`};
`
const FlexDiv = styled.div`
  display: flex;
  margin-top: 17px;
`

const SignUp = ({ submitHandler, handleInput, handleRoleChange }) => (
  <FormContainer>
    <Title>Register</Title>
    <Input
      name="name"
      placeholder="Name"
      mt={28}
      onChange={e => handleInput(e)}
    />
    <Input
      name="email"
      placeholder="email@example.com"
      mt={16}
      onChange={e => handleInput(e)}
    />
    <FlexDiv>
      <Button mr={14} onClick={() => handleRoleChange('artist')}>
        Artist
      </Button>
      <Button onClick={() => handleRoleChange('personal')}>Personal</Button>
    </FlexDiv>
    <Input
      name="password"
      placeholder="Password"
      type="password"
      mt={16}
      onChange={e => handleInput(e)}
    />
    <Input
      name="confirmPassword"
      placeholder="Confirm Password"
      type="password"
      mt={21}
      onChange={e => handleInput(e)}
    />
    <Button mt={17} onClick={() => submitHandler()}>
      Register
    </Button>
  </FormContainer>
)

export default signUpEnhancer(SignUp)
