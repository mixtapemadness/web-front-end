import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
`

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  top: 120px;
  z-index: 1;
  border-bottom: 1px solid #e7e7e7;
  animation: ${fadeDown} 0.3s ease-in;
`

const MobileBurgerMenu = () => <Container />

export default MobileBurgerMenu
