/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TwitterIcon from 'resources/assets/svg/twitter-logo.svg'
import FacebookIcon from 'resources/assets/svg/facebook-app-logo.svg'
import DotsIcon from 'resources/assets/svg/ellipsis.svg'
import SignalBarsIcon from 'resources/assets/svg/signal-bars.svg'

const PostContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`

const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media only screen and (max-width: 450px) {
    display: none;
  }
`
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`

const RightSide = styled.div``
const Icon = styled.img`
  ${p => p.height && `height: ${p.height}`};
  margin-right: 20px;
  cursor: pointer;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
  ${p => p.mr && `margin-right: ${p.mr}px`};
`

const Social = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Post = styled.div`
  width: 76%;
  margin: auto;
  font-size: 20px;
`
const Span = styled.span`
  font-size: 16px;
  ${p => p.color && `color: ${p.color}`};
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
`
const Paragraph = styled.p`
  @media only screen and (max-width: 450px) {
    font-size: 16px;
  }
`
const BlogPost = ({ data }) => (
  <PostContainer>
    <Heading>
      <LeftSide>
        <Social>
          <Icon height="20px" alt="twitter" src={TwitterIcon} />
          <Icon height="17px" alt="fb" src={FacebookIcon} />
          <Icon height="17px" alt="signals" src={SignalBarsIcon} />
          <Icon height="26px" alt="dots" src={DotsIcon} />
        </Social>
        <Span mb={10}>-</Span>
        <Span mb={10}>
          {data.views}
          {' Views'} : {data.raiting}
        </Span>
        <Span mb={10}>{data.date}</Span>
        <Span>
          By <Span color="#FF9D00">{data.author}</Span>
        </Span>
      </LeftSide>
      <RightSide>
        <Span color="#666666">CREDIT: Jun Yokoyama</Span>
      </RightSide>
    </Heading>
    <Post>
      <Paragraph>{data.text}</Paragraph>
    </Post>
  </PostContainer>
)

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost
