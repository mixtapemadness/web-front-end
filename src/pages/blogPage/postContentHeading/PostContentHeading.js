/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint arrow-body-style: 0 */
/* eslint indent: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint react/jsx-indent-props: 0 */
/* eslint react/jsx-closing-tag-location: 0 */
/* eslint react/jsx-boolean-value: 0 */

import React from 'react'
import styled from 'styled-components'
import Facebook from 'resources/assets/svgComponents/Facebook'
import Twitter from 'resources/assets/svgComponents/Twitter'
import SoundCloud from 'resources/assets/svgComponents/SoundCloud'
import Dots from 'resources/assets/svgComponents/Dots'
import {
  TwitterShareButton,
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
} from 'react-share'

import AuthorName from 'components/AuthorName'
import { dateStringify } from 'helpers/'
import blogPageImgEnhancer from './postContentHeadingEnhancer'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`

const ContainerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContainerBottom = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 800;
  color: #666666;
  text-align: left;
`

const Links = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`

const Credit = styled.div`
  color: #666666;
  font-weight: 800;
`
const Views = styled.div``

const Date = styled.div`
  margin: 5px 0;
`

const Author = styled.div`
  display: flex;
  font-weight: 800;
`

const PostContentHeading = ({ date, authorId }) => {
  const url = window.location.href.toString()
  return (
    <Container>
      <ContainerTop>
        <Links>
          <FacebookShareButton url={url} title={'facebook'}>
            <FacebookIcon
              url={window.location.href.toString()}
              size={32}
              round={true}
            />
          </FacebookShareButton>
          <GooglePlusShareButton url={url} title={'twitter'}>
            <GooglePlusIcon size={32} round={true} />
          </GooglePlusShareButton>
          ,
          <LinkedinShareButton url={url} title={'twitter'}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <TwitterShareButton url={url} title={'twitter'}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </Links>
        {/* <Credit>Credit:ParkLife</Credit> */}
      </ContainerTop>
      <ContainerBottom>
        {/* <Views>3000 views: 5/5</Views> */}
        <Date>{dateStringify(date, false, true)}</Date>
        <Author>
          By :<AuthorName id={authorId} />
        </Author>
      </ContainerBottom>
    </Container>
  )
}

export default blogPageImgEnhancer(PostContentHeading)
