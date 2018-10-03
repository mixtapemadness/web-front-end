/* eslint react/jsx-indent: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'
import Advertisement from 'components/advertisement'
import PostItem from 'components/postItem'
// import MobileComponent from 'components/mobileComponent'
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
  flex: 1 0 357px;
  height: 480px;
  margin: 5px;
  @media only screen and (max-width: 450px) {
    width: 90%;
  }
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

const YouMayLike = ({ width, data }) => {
  const Posts = data && data.Posts && data.Posts
  return (
    <MayLikeContainer>
      <AlsoLikeHeaderContainer>
        {width > 450 && <span>You May also like</span>}
        {width <= 450 && <span>What To Read Next</span>}
      </AlsoLikeHeaderContainer>
      <Div>
        <AdvertisementContainer>
          <Advertisement />
        </AdvertisementContainer>
        {Posts && Posts.map(item => <PostItem key={item.id} data={item} />)}
      </Div>
    </MayLikeContainer>
  )
}

export default youMayLikeEnhancer(YouMayLike)
