import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
`;
const ImageContainer = styled.div`
  height: 220px;
  width: 161px;
  background-image: url(${p => p.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0 3px 6px 6px #ccc;
  box-shadow: 1px 3px 10px 1px #ccc;
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;
const Title = styled.span`
  font-size: 14.5px;
  text-align: center;
  font-weight: 600;
`;
const SubTitle = styled.span`
  font-size: 14.5px;
  text-align: center;
`;

const MoreMenuItem = ({ data }) => (
  <Container>
    <ImageContainer background={data.img} />
    <ContentContainer>
      <Title>{data.title}</Title>
      <SubTitle>{data.subTitle}</SubTitle>
    </ContentContainer>
  </Container>
);

export default MoreMenuItem;
