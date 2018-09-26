/* eslint operator-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'

import Footer from 'components/footer'
import MenuItem from 'components/menuItem'

// import Musician from 'resources/assets/img/musician1.png'
// import Musician1 from 'resources/assets/img/2pac.jpg'
// import Musician2 from 'resources/assets/img/eminem.jpg'
import menuEnhancer from './menuEnhancer'

const Container = styled.div`
  position: fixed;
  top: 120px;
  width: 100%;
  background: #ff9600;
  height: 100%;
  z-index: 2;
  padding-bottom: 100px;
  border-top: 1px solid #ffffff;
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #e68600;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #e68600;
    outline: 1px solid slategrey;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
`
const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Line = styled.div`
  height: 3px;
  background-color: #ffffff;
  width: 100%;
  margin-top: 55px;
`

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`
const List = styled.ul`
  font-size: 29.5px;
  color: #ffffff;
  letter-spacing: 1.8px;
  list-style: none;
  font-weight: 600;
  li {
    cursor: pointer;
  }
  @media only screen and (max-width: 850px) {
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
  }
`

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`
const Divider = styled.div`
  width: 1px;
  background-color: #ffffff;
  height: auto;
  @media only screen and (max-width: 850px) {
    height: 1px;
    width: 100%;
  }
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 29%;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`

const Title = styled.div`
  font-size: 29.5px;
  letter-spacing: 1.8px;
  color: #ffffff;
  font-weight: 600;
  margin: 79px 0 46px 0;
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`

const Menu = ({ data, toggleMenu }) => {
  const Posts = data && data.Posts && data.Posts
  return (
    <Container>
      <ContentContainer>
        <ListContainer>
          <List>
            <li>Trending</li>
            <li>What&apos;s On</li>
            <li>Hottest</li>
          </List>
          <List>
            <li>Latest</li>
            <li>Mixtapes</li>
            <li>Singles</li>
          </List>
          <List>
            <li>Playlists</li>
            <li>Interviews</li>
            <li>Reviews</li>
          </List>
          <List>
            <li>Exclusives</li>
            <li>Charts</li>
            <li>Blog</li>
          </List>
        </ListContainer>
        <Title>Today’s Most Read News</Title>
        <ItemContainer>
          {Posts &&
            Posts.map((item, index, arr) => (
              <FlexDiv key={item.id}>
                <MenuItem toggleMenu={toggleMenu} data={item} />
                {index !== arr.length - 1 && <Divider />}
              </FlexDiv>
            ))}
        </ItemContainer>
        <Line />
        <Footer menuOpened />
      </ContentContainer>
    </Container>
  )
}
export default menuEnhancer(Menu)
