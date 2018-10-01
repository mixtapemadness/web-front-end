/* eslint operator-linebreak: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react'
import styled from 'styled-components'

import Footer from 'components/footer'
import MenuItem from 'components/menuItem'
import { Link } from 'react-router-dom'
import menuEnhancer from './menuEnhancer'
// import Musician from 'resources/assets/img/musician1.png'
// import Musician1 from 'resources/assets/img/2pac.jpg'
// import Musician2 from 'resources/assets/img/eminem.jpg'
const Container = styled.div`
  position: fixed;
  top: 120px;
  width: 100%;
  background-color: #ff9600;
  height: 100%;
  z-index: 2;
  padding-bottom: 100px;
  border-top: 1px solid #ffffff;
  overflow-y: auto;
  padding: 0 20px;
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
  @media only screen and (max-width: 850px) {
    top: 80px;
    border-top: 0;
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
`

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
  @media only screen and (max-width: 1050px) {
    justify-content: center;
  }
`

const List = styled.ul`
  font-size: 29.5px;
  color: #ffffff;
  letter-spacing: 1.8px;
  list-style: none;
  font-weight: 600;
  li {
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      color: #ded6d6;
    }
    @media only screen and (max-width: 1050px) {
      margin: 10px;
      font-size: 18px;
      text-align: center;
    }
  }
  @media only screen and (max-width: 850px) {
    margin-bottom: 20px;
    text-align: center;
  }
`

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
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
    align-items: center;
  }
`

const Title = styled.div`
  font-size: 29.5px;
  letter-spacing: 1.8px;
  color: #ffffff;
  font-weight: 600;
  margin: 79px 0 46px 0;
  @media only screen and (max-width: 1050px) {
    text-align: center;
    margin: 20px 0;
  }
`

const Menu = ({ data, toggleMenu }) => {
  const Posts = data && data.Posts && data.Posts
  return (
    <Container>
      <ContentContainer>
        <ListContainer>
          <List>
            <Link onClick={() => toggleMenu()} to={'/blog/category/videos'}>
              <li>Videos</li>
            </Link>
            <Link onClick={() => toggleMenu()} to={'/blog/category/articles'}>
              <li>Articles</li>
            </Link>
            <Link onClick={() => toggleMenu()} to={'/blog/category/events'}>
              <li>Events</li>
            </Link>
          </List>
          <List>
            <Link onClick={() => toggleMenu()} to={'/blog/category/reviews'}>
              <li>Reviews</li>
            </Link>
            <Link onClick={() => toggleMenu()} to={'/blog/category/news'}>
              <li>News</li>
            </Link>
            <Link onClick={() => toggleMenu()} to={'/blog/category/interviews'}>
              <li>Interviews</li>
            </Link>
          </List>
          <List>
            {/* <li>Playlists</li> */}
            {/* <li>Interviews</li> */}
            {/* <li>Reviews</li> */}
          </List>
          <List>
            {/* <li>Exclusives</li> */}
            {/* <li>Charts</li> */}
            {/* <li>Blog</li> */}
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
