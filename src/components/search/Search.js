import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f7941d;
  z-index: 1;
  opacity: 0.89;
  overflow-y: auto;
`
const Input = styled.input`
  width: 77%;
  max-width: 1028px;
  background: transparent;
  border: none;
  border-bottom: 12px solid #ffffff;
  height: 105px;
  outline: none;
  color: #ffffff;
  font-size: 62px;
  font-weight: 600;
  ::-webkit-input-placeholder {
    color: #ffffff;
    font-size: 62px;
    font-weight: 600;
  }
  ::-moz-placeholder {
    color: #ffffff;
    font-size: 62px;
    font-weight: 600;
  }
  :-ms-input-placeholder {
    color: #ffffff;
    font-size: 62px;
    font-weight: 600;
  }
  :-moz-placeholder {
    color: #ffffff;
    font-size: 62px;
    font-weight: 600;
  }
`

const InputContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Close = styled.span`
  position: absolute;
  right: 0;
  margin-right: 40px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
  color: #ffffff;
`
const Search = ({ toggleSearch }) => (
  <Container>
    <Close onClick={() => toggleSearch()}>X</Close>
    <InputContainer>
      <Input placeholder="Search" />
    </InputContainer>
  </Container>
)

export default Search
