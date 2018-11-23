import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  color: #ffffff;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 340px;
`

const Title = styled.span`
  font-size: 15.5px;
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

const NewsLetter = () => (
  <FormContainer>
    <Title>
      Subscribe to Mixtape Madness and get the lastest music, news, playlists
      and much more straight to your email
    </Title>
    <Input placeholder="email@example.com" mt={25} />
  </FormContainer>
)

export default NewsLetter
