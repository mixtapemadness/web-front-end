import React from 'react'
import styled from 'styled-components'

import ProfileInfo from 'components/profileInfo'
import Image from 'resources/assets/img/mixtape-logo.png'

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 20px;
`
const ItemContainer = styled.div`
  margin-top: 20px;
`

const dummyData = [
  {
    img: Image,
    name: 'Bianca Grace',
    ocupation: 'Music Editor',
    bio:
      'Jake is a Content Creator for Mixtape Madness. With a strong background in journalism and Grime/UK Rap, Jake is able to create the best content for Mixtape Madness.',
    id: 0,
  },
  {
    img: Image,
    name: 'Benjamin Evalent',
    ocupation: 'Music Editor',
    bio:
      'Benjamin is a 25 year old writer for Mixtape Madness. He has broken stroies predominatntley within the grime scene. He enjoys listening to all artists including AJ Tracey, Nines, Not3s and Skepta',
    id: 1,
  },
  {
    img: Image,
    name: 'William Vince',
    ocupation: 'Content Creator',
    bio:
      'William is a Content Creator for Mixtape Madness. With a strong background in journalism and Grime/UK Rap, William is able to create the best content for Mixtape Madness.',
    id: 2,
  },
  {
    img: Image,
    name: 'Jon Jones',
    ocupation: 'Content Creator',
    bio:
      'Jon Jones is a Content Creator for Mixtape Madness. With a strong background in journalism and Grime/UK Rap, he is able to create the best content for Mixtape Madness.',
    id: 3,
  },
]

const TeamPage = () => (
  <Container>
    {dummyData.map(item => (
      <ItemContainer>
        <ProfileInfo data={item} key={item.id} fromTeam />
      </ItemContainer>
    ))}
  </Container>
)

export default TeamPage
