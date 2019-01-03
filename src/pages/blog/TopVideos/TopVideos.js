/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import styled from 'styled-components'
import TopVideo from 'components/topVideo'
import { Link } from 'react-router-dom'
import { TopVideoLoader } from 'components/loaders'
import topVideosEnhancer from './topVideosEnhancer'

const TopVideosContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  @media only screen and (max-width: 1130px) {
    justify-content: normal;
  }
`

const Header = styled.h1`
  width: 100%;
  color: #111;
  margin: 0;
`

const MoreVideos = styled(Link)`
  width: 100%;
  color: #111;
  cursor: pointer;
  font-weight: 800;
`

const TopVideos = ({ data }) => (
  <TopVideosContainer>
    <Header>Recent Music Videos</Header>
    {data.loading && [...Array(8)].map(i => <TopVideoLoader key={i} />)}
    {!data.loading &&
      data &&
      data.Posts &&
      data.Posts.map(item => <TopVideo key={item.id} data={item} />)}
  </TopVideosContainer>
)

export default topVideosEnhancer(TopVideos)
