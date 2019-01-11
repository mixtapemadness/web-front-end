import React from 'react';
import styled from 'styled-components';

import ProfileInfo from 'components/profileInfo';
import Image from 'resources/assets/img/mixtape-logo.png';

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 20px;
`;
const ItemContainer = styled.div`
  margin-top: 20px;
`;

const dummyData = [
  {
    id: 1,
    avatar2: Image,
    name: 'Jon Jones',
    ocupation: 'Content Creator',
    description:
      'Jon Jones is a Content Creator for Mixtape Madness. With a strong background in journalism and Grime/UK Rap, he is able to create the best content for Mixtape Madness.',
  },
  {
    id: 2,
    avatar2: Image,
    name: 'Jon Jones',
    ocupation: 'Content Creator',
    description:
      'Jon Jones is a Content Creator for Mixtape Madness. With a strong background in journalism and Grime/UK Rap, he is able to create the best content for Mixtape Madness.',
  },
  {
    id: 3,
    avatar2: Image,
    name: 'Jon Jones',
    ocupation: 'Content Creator',
    description:
      'Jon Jones is a Content Creator for Mixtape Madness. With a strong background in journalism and Grime/UK Rap, he is able to create the best content for Mixtape Madness.',
  },
  {
    id: 4,
    avatar2: Image,
    name: 'Jon Jones',
    ocupation: 'Content Creator',
    description:
      'Jon Jones is a Content Creator for Mixtape Madness. With a strong background in journalism and Grime/UK Rap, he is able to create the best content for Mixtape Madness.',
  },
];

const TeamPage = () => (
  <Container>
    {dummyData.map(item => (
      <ItemContainer>
        <ProfileInfo data={item} key={item.id} fromTeam />
      </ItemContainer>
    ))}
  </Container>
);

export default TeamPage;
