import React from 'react'
import styled from 'styled-components'

import Advertisement from 'components/advertisement'
import TopVideos from '../TopVideos'

const Container = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`

const AdvertisementContainer = styled.div`
  width: 64.75%;
  height: 838px;
  margin-top: 24px;
  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`
// loadDataAsync({
//   query: getPosts,
//   config: {
//     options: props => ({
//       variables: {
//         page: 1,
//         perPage: 3,
//         filter: { categories: 'VIDEOS' },
//       },
//     }),
//   },
// }),
export default ({ TopVideosData }) => (
  <Container>
    <AdvertisementContainer>
      <Advertisement news />
    </AdvertisementContainer>
    <TopVideos data={TopVideosData} />
  </Container>
)
