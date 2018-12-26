import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import SocialIcons from 'components/SocialIcons/'

const MobileFooterContainer = styled.div`
  max-width: 310px;
  margin: 20px auto;
`

const MobileContentContainer = styled.div`
  display: flex;
  justify-content: center;
  color: '#000000';
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`

const ListItem = styled.li`
  margin-bottom: 15px;
  font-weight: 600;
  list-style: none;
  font-size: 14px;
  margin-right: 20px;
  display: inline-block;
`

const MobileFooter = ({ menuOpened }) => (
  <MobileFooterContainer>
    <SocialIcons menuOpened={menuOpened} />
    <MobileContentContainer jc menuOpened={menuOpened}>
      <List menuOpened={menuOpened}>
        <ListItem>
          <Link to="/aboutus">About</Link>
        </ListItem>
        <ListItem>
          <Link to="/blog/category/videos">Videos</Link>
        </ListItem>
        <ListItem>
          <Link to="/blog/category/articles">Articles</Link>
        </ListItem>
        <ListItem>
          <Link to="/blog/category/events">Events</Link>
        </ListItem>
        <ListItem>
          <Link to="/blog/category/reviews">Reviews </Link>
        </ListItem>
        <ListItem>
          <Link to="/blog/category/news">News</Link>
        </ListItem>
        <ListItem>
          <Link to="/blog/category/interviews">Interviews</Link>
        </ListItem>
      </List>
    </MobileContentContainer>
  </MobileFooterContainer>
)

export default MobileFooter
