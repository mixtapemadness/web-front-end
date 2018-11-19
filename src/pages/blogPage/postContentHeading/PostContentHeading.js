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
/* eslint object-curly-newline: 0 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
// import window from 'global/window'
import { dateStringify } from 'helpers/'
import window from 'global/window'
import config from '../../../../config'
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
const AuthorName = styled(Link)`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
  font-weight: 800;
`

const Links = styled.div`
  display: flex;
  width: 50px;
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

const IconWrapper = styled.div`
  cursor: pointer;
`

const PostContentHeading = ({ date, userName, location, userSlug, match }) => {
  console.log('location', location)
  const { category, slug } = match.params
  // const url = `${config.apiUrl}api/v1/blog/${
  //   match.params.category
  // }/${slug}/share`
  const url = window.location ? window.location.href : ''
  return (
    <Container>
      <ContainerTop>
        <Links>
          <FacebookShareButton url={url} iconBgStyle={'cursor:pointer'}>
            <IconWrapper>
              <Facebook width={20} height={20} color={'#666666'} />
            </IconWrapper>
          </FacebookShareButton>
          <TwitterShareButton url={url} iconBgStyle={'cursor:pointer'}>
            <IconWrapper>
              <Twitter width={20} height={20} color={'#666666'} />
            </IconWrapper>
          </TwitterShareButton>
        </Links>
        {/* <Credit>Credit:ParkLife</Credit> */}
      </ContainerTop>
      <ContainerBottom>
        {/* <Views>3000 views: 5/5</Views> */}
        <Date>{dateStringify(date, false, true)}</Date>
        <Author>
          By :<AuthorName to={`/author/${userSlug}`}>{userName}</AuthorName>
        </Author>
      </ContainerBottom>
    </Container>
  )
}

export default blogPageImgEnhancer(PostContentHeading)
