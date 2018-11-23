/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 2px solid #f5f5f5;
`

const FilterItem = styled(Link)`
  flex: 1;
  text-align: center;
  color: 111;
  font-size: 26px;
  padding: 20px;
  box-sizing: border-box;
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #ff9600;
  }
`

export default () => (
  <FilterContainer>
    <FilterItem to="/music-profile/youmusic">Your Music</FilterItem>
    <FilterItem to="/music-profile/listeninghistory">
      Listening History
    </FilterItem>
    <FilterItem to="/music-profile/mixtapes">Mixtapes</FilterItem>
    <FilterItem to="/music-profile/singles">Singles</FilterItem>
    <FilterItem to="/music-profile/profile">Profile</FilterItem>
  </FilterContainer>
)
