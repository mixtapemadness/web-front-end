import React from 'react'
import styled from 'styled-components'

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
  width: 74px;
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

const Register = () => (
  <FormContainer>
    <Title>Register</Title>
    <Input placeholder="Name" mt={28} />
    <Input placeholder="email@example.com" mt={16} />
    <FlexDiv>
      <Button mr={14}>Artist</Button>
      <Button>Personal</Button>
    </FlexDiv>
    <Input placeholder="Password" type="password" mt={16} />
    <Input placeholder="Confirm Password" type="password" mt={21} />
    <Button mt={17}>Register</Button>
  </FormContainer>
)

export default Register
