/* eslint react/jsx-indent: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'
import Advertisement from 'components/advertisement'
import Musician from 'resources/assets/img/musician1.png'
import Musician1 from 'resources/assets/img/2pac.jpg'
import Musician2 from 'resources/assets/img/eminem.jpg'
import PostItem from 'components/postItem'
import MobileComponent from 'components/mobileComponent'
import youMayLikeEnhancer from './youMayLikeEnhancer'

const MayLikeContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

const Div = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

const AdvertisementContainer = styled.div`
  width: 357px;
  height: 627px;
`

const AlsoLikeHeaderContainer = styled.div`
  width: 100%;
  margin: 40px auto;
  height: 100px;
  border-top: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  color: #000000;
`

const blogPageData = {
  video: 'https://www.youtube.com/watch?v=lt-udg9zQSE',
  tags: ['AJ Tracey', 'Music Video', 'Grime', 'UK Rap', 'London'],
  mayLike: [
    {
      picture: Musician,
      type: 'News',
      header: 'C36 Drops "Guten Tag" Video exclusively on mixtape madness',
      text:
        'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
      time: '1 Hour',
      id: 12,
    },
    {
      picture: Musician1,
      type: 'News',
      header:
        'Balistik releases the video for "who is next", on mixtape madness',
      text:
        'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
      id: 15,
      time: '1 Hour',
    },
    {
      picture: Musician2,
      type: 'News',
      header: 'WSTRN drops their new single "Sharna"',
      text:
        'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
      id: 7,
      time: '2 Hour',
    },
    {
      picture: Musician,
      type: 'News',
      header: 'Mo stack covers puma RS-O event in london',
      text:
        'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
      id: 20,
      time: '5 Hour',
    },
    {
      picture: Musician1,
      type: 'News',
      header: 'Lady Leshurr Drops Her New Freestyle',
      text:
        'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
      id: 30,
      time: '3 Hour',
    },
  ],
}

const YouMayLike = ({ width, data, handleRefetch }) => (
  <MayLikeContainer>
    {
      // console.log('youMaydata', data)
    }
    <AlsoLikeHeaderContainer>
      {width > 450 && <span>You May also like</span>}
      {width <= 450 && <span>What To Read Next</span>}
    </AlsoLikeHeaderContainer>
    {width > 450 && (
      <Div>
        <AdvertisementContainer>
          <Advertisement />
        </AdvertisementContainer>
        {data.getPosts && data.getPosts.length > 0
          ? data.getPosts.map(item => (
              // <StyledLink to={`/blog/${item.type}/${item.id}`} key={item.id}>
              // </StyledLink>
              <PostItem onClick={handleRefetch} key={item.id} data={item} />
            ))
          : ''}
      </Div>
    )}
    {width <= 450 &&
      blogPageData.mayLike.map(item => <MobileComponent data={item} />)}
  </MayLikeContainer>
)

export default youMayLikeEnhancer(YouMayLike)
