import React from 'react'
import styled from 'styled-components'

import Advertisement from 'components/advertisement'
import TopVideos from '../TopVideos'

const Container = styled.div`
  width: 100%;
  display: flex;
`

const AdvertisementContainer = styled.div`
  width: 777px;
  height: 838px;
  margin-top: 24px;
`

export default ({ TopVideosData }) => (
  <Container>
    <AdvertisementContainer>
      <Advertisement />
    </AdvertisementContainer>
    <TopVideos data={TopVideosData} />
  </Container>
)
