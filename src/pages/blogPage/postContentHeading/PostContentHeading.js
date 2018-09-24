/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint arrow-body-style: 0 */

import React from 'react'
import styled from 'styled-components'
import Facebook from 'resources/assets/svgComponents/Facebook'
import Twitter from 'resources/assets/svgComponents/Twitter'
import SoundCloud from 'resources/assets/svgComponents/SoundCloud'
import Dots from 'resources/assets/svgComponents/Dots'

import AuthorName from 'components/AuthorName'
import blogPageImgEnhancer from './postContentHeadingEnhancer'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
  return (
    <Container>
      <ContainerTop>
        <Links>
          <Facebook width={20} color={'#666666'} />
          <Twitter width={20} color={'#666666'} />
          <SoundCloud width={25} color={'#666666'} />
          <Dots width={25} color={'#666666'} />
        </Links>
        {/* <Credit>Credit:ParkLife</Credit> */}
      </ContainerTop>
      <ContainerBottom>
        {/* <Views>3000 views: 5/5</Views> */}
        <Date>{date}</Date>
        <Author>
          By :<AuthorName id={authorId} />
        </Author>
      </ContainerBottom>
    </Container>
  )
}

export default blogPageImgEnhancer(PostContentHeading)
