import React from 'react';
import styled from 'styled-components';
// import DotsIcon from '../../../../assets/svg/MixTape/ellipsis.svg'

const GridContainer = styled.div`
  max-width: 1100px;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridTitle = styled.div`
  color: #000000;
  width: 65%;
  text-align: center;
  font-weight: 600;
  font-size: 38px;
  letter-spacing: 2.3px;
  @media only screen and (max-width: 1024px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 760px) {
    font-size: 26px;
  }
`;

const GridItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const GridItem = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GridItemIcon = styled.div`
  min-width: 226px;
  min-height: 226px;
  border: solid 1px #000000;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    min-width: 180px;
    min-height: 180px;
  }
  @media only screen and (max-width: 760px) {
    min-width: 120px;
    min-height: 120px;
  }
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${props => props.src});
  background-position: center center;
  background-repeat: no-repeat;
  @media only screen and (max-width: 1024px) {
    width: 60px;
    height: 60px;
  }
  @media only screen and (max-width: 760px) {
    width: 40px;
    height: 40px;
  }
`;

const GridItemTxt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-size: 22px;
  margin-top: 20px;
`;

const GridItemText = styled.span`
  font-size: 24.5px;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: #000000;
  @media only screen and (max-width: 1024px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 760px) {
    font-size: 16px;
  }
`;

export default props => {
  const { data } = props;
  return (
    <GridContainer>
      <GridTitle>Why Join Mixtape Madness</GridTitle>
      <GridItems>
        {data.map(item => (
          <GridItem>
            <GridItemIcon>
              <Icon src={item.icon} />
            </GridItemIcon>
            <GridItemTxt>
              <GridItemText>{item.title}</GridItemText>
              <GridItemText>{item.helperTxt}</GridItemText>
            </GridItemTxt>
          </GridItem>
        ))}
      </GridItems>
    </GridContainer>
  );
};
